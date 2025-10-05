/**
 * Action Error
 */
module.exports = class extends Error {
    constructor({
        message,
        code,
        name,
        httpCode = 500,
    }) {
        super(message);

        this.type = "Base Error";
        this.httpCode = httpCode;
        this.code = code;
        this.name = name;
    }
};
