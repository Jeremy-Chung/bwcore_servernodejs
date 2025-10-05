/**
 * Setting up env basic configuration
 */
const port = process.env.PORT || 3001;
module.exports = {
    port, // port to listen
    httpErrorHandler: undefined, // http api error handler
    http404Handler: undefined, // http 404 handler
    staticRoutes: [{
        route: "/docs",
        path: "docs",
    }, {
        route: "/readme.md",
        path: "README.md",
    }, {
        route: "/changelog.md",
        path: "CHANGELOG.md",
    }],
    enableCORS: true,
    loggingPath: "./log", // where to log
    maxFileSize: 52428800, // 5mb
};
