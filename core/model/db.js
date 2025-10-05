// Refs to: http://www.camintejs.com/en/guide
const { Schema } = require("caminte");

let connectionPool = [];

module.exports = (config = {}) => {
    connectionPool = connectionPool.filter(conn => conn.expired >= Date.now());

    const {
        driver,
        host,
        port,
        poolSize = 10,
    } = config;
    const key = `${ driver }-${ host }:${ port }`;
    const availableSchema = connectionPool.filter(conn => conn.key === key);
    const index = Math.floor(Math.random() * availableSchema.length);

    if (poolSize > availableSchema.length) {
        const conn = {
            key,
            driver,
            index: availableSchema.length + 1,
            expired: Date.now() + 3600000,
            instance: new Schema(driver, config),
        };

        availableSchema.push(conn);
        connectionPool.push(conn);
    }

    return availableSchema[index].instance;
};
