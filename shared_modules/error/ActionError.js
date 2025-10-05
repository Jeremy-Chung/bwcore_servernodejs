/**
 * Action Error
 */
const BaseError = require("./BaseError");

module.exports = class extends BaseError {
    constructor(err) {
        super(err);

        this.type = "Action Error";
    }
};
