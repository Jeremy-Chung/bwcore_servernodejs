/**
 * Basic Model Object
 */
const db = require("./db");

const convertLayout = (schema, layout) => {
    return Object.keys(layout).reduce((obj, key) => {
        const realObj = obj;
        realObj[key] = layout[key];
        realObj[key].type = schema[obj[key].type];

        return realObj;
    }, {});
};

module.exports = class Model {
    constructor({
        name,
        config,
        layout,
        indexes,
    }) {
        const schema = db(config);
        const realLayout = convertLayout(schema, layout);

        this.schema = schema.define(
            name,
            realLayout,
            indexes
        );
        this.name = name;
        this.config = config;
        this.layout = realLayout;
        this.indexes = indexes;

        this.afterInitialize();
    }

    afterInitialize() {}

    upsert(where, data) {
        return this.update(where).then(response => {
            const { affectedRows } = response;

            if (0 === affectedRows) {
                return this.insert(data);
            }

            return {
                affectedRows,
            };
        });
    }

    beforeUpdate(where, data) {
        const realWhere = where;
        const realData = data;
        return { realWhere, realData };
    }

    update(where, data) {
        const { realWhere, realData } = this.beforeUpdate(where, data);
        const doUpdate = (affectedRows) => {
            return new Promise((resolve, reject) => {
                this.schema.update({ where: realWhere }, realData, err => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        const retValue = {
                            updated: realData,
                            affectedRows,
                        };
                        this.afterUpdate(retValue);
                        resolve(retValue);
                    }
                });
            });
        };

        if (0 === Object.keys(realData)) {
            return Promise.reject(new Error("No Data was inserted"));
        }

        if (0 === Object.keys(realWhere)) {
            return Promise.reject(new Error("Filter(s) are Necessary"));
        }

        return this.find({ where: realWhere }).then(response => {
            const affectedRows = response.length;

            if (0 === affectedRows) {
                return { affectedRows };
            }

            return doUpdate(affectedRows);
        });
    }

    afterUpdate() {}

    beforeInsert(data) {
        return data;
    }

    insert(data = {}) {
        if (0 === Object.keys(data)) {
            return Promise.reject(new Error("No Data was inserted"));
        }

        return new Promise((resolve, reject) => {
            const realData = this.beforeInsert(data);

            this.schema.create(realData, err => {
                if (err) {
                    reject(err);
                }
                else {
                    this.afterInsert(realData);
                    resolve(realData);
                }
            });
        });
    }

    afterInsert() {}

    beforeDelete(where) {
        return where;
    }

    delete(where = undefined) {
        const doRemove = () => {
            return new Promise((resolve, reject) => {
                const realWhere = this.beforeDelete(where);

                this.schema.remove({ where: realWhere }, err => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        const retValue = {
                            affectedRows: 1,
                        };
                        this.beforeDelete(retValue);
                        resolve(retValue);
                    }
                });
            });
        };

        if (0 === Object.keys(where) || undefined === where) {
            return Promise.reject(new Error("Filter(s) are Necessary"));
        }

        return this.find({ where }).then(response => {
            const affectedRows = response.length;

            if (0 === affectedRows) {
                return { affectedRows };
            }

            return doRemove();
        });
    }

    afterDelete() {}

    beforeFind(filter) {
        return filter;
    }

    find(filter = {}) {
        return new Promise((resolve, reject) => {
            const realFilter = this.beforeFind(filter);

            this.schema.find(realFilter, (err, response) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(this.afterFind(response) || response);
                }
            });
        });
    }

    afterFind() {}

    findOne(filter = {}) {
        return new Promise((resolve, reject) => {
            const realFilter = this.beforeFind(filter);

            this.schema.findOne(realFilter, (err, response) => {
                if (err) {
                    reject();
                }
                else {
                    resolve(this.afterFind(response) || response);
                }
            });
        });
    }

    count(where = {}) {
        return new Promise((resolve, reject) => {
            this.schema.count({ where }, (err, count) => {
                if (err) {
                    reject();
                }
                else {
                    resolve(count);
                }
            });
        });
    }
};
