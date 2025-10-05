/**
 * Load and bind routes
 */
const setHooks = require.call(null, "./hooks");
const setStaticRoutes = require.call(null, "./static");
const setResponse = require.call(null, "./response");
const setErrorHandler = require.call(null, "./error-handler");
const bindRoutes = require.call(null, "./bind-routes");
const start = require.call(null, "./start");

module.exports = app => {
    const { expressApp, http } = app;

    setHooks(expressApp);
    setStaticRoutes(expressApp);
    setResponse(expressApp);
    bindRoutes(expressApp);
    setErrorHandler(expressApp);
    start(expressApp, http);
};
