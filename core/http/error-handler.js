/**
 * Generic ErrorHandler
 */
const baseConfig = require.call(null, "./config");

const {
    httpErrorHandler,
} = baseConfig;

module.exports = expressApp => {
    if ("function" === typeof httpErrorHandler) {
        // custom error handler
        expressApp.use(httpErrorHandler);
    }

    const httpGenericErrorHandler = (err, req, res, next) => {
        const {
            httpCode = 500,
            message,
            code,
            name,
            type,
        } = err;

        res.status(httpCode).send({
            message,
            code,
            name,
            type,
        });

        if (typeof next === "function") {
            next(err);
        }
    };

    expressApp.use(httpGenericErrorHandler);
};
