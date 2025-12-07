/**
 * bind routes
 */
const { safeRequire } = global;
const routes = require("../routes");
const baseConfig = require.call(null, "./config");
const ActionError = require.call(null, "../../shared_modules/error/ActionError");
const {
    http404Handler = (req, res, next) => {
        next(new ActionError({
            message: "Not found",
            httpCode: 404,
        }));
    },
} = baseConfig;

module.exports = (expressApp) => {
    const validator = (httpMethod, validation) => {
        return function (req, res, next) {
            const keys = Object.keys(validation);
            const { query, body } = req;
            const httpVars = (
                "get" === httpMethod.toLowerCase() ? query : body
            );

            keys.forEach(key => {
                validation[key].test(httpVars[key], key);
            });

            next();
        };
    };

    const allRoutes = Object.keys(routes).reduce((arr, key) => {
        return [...arr, ...routes[key]];
    }, []);

    allRoutes.forEach(routeSetting => {
        const {
            path,
            method = "get",
            action,
            middleware,
            validation,
        } = routeSetting;
        const args = [path];
        let middlewares = [];

        if (!expressApp[method] && "function" !== typeof action) {
            throw new Error(`Method "${ method }" is invalid`);
        }

        if ("function" === typeof middleware) {
            middlewares.push(middleware);
        }
        else if (middleware instanceof Array) {
            middlewares.push(...middleware);
        }
        else {
            middlewares = [];
        }

        if (validation) {
            middlewares.push(validator(method, validation));
        }

        args.push(...middlewares, action);

        expressApp[method.toLowerCase()].call(expressApp, ...args);
    });

    // 404
    expressApp.all("*", http404Handler);
};
