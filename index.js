const basePath = __dirname;
const cwd = process.cwd();

global.cwd = cwd;
global.frameworkRoot = basePath;
global.safeRequire = require("./core/safe-require");

const { name, version } = require("./package.json");
const createLogger = require("./core/create-logger");
const setHttp = require("./core/http");
const wsEvents = require("./core/bind-ws-events");
const Model = require("./core/model");
const expressApp = require("express")();
const http = require("http").Server(expressApp);

const packageInfo = {
    name,
    version,
};
const application = {
    http,
    expressApp,
    Model,
    packageInfo,
};

createLogger(application);

// binding routes
setHttp(application);

// bind websocket events
wsEvents(application);

process.on("uncaughtException", (err) => {
    console.error(err);
});

module.exports = application;
