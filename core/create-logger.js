/**
 * logger setup
 * using (log4js)[https://www.npmjs.com/package/log4js`]
 */
const {
    cwd,
} = global;
const path = require("path");
const { loggingPath } = require("../configs/base");
const log4js = require("log4js");

module.exports = (app) => {
    const { expressApp } = app;
    const logDirectory = path.join(cwd, loggingPath);

    log4js.configure({
        appenders: [
            { type: "console" }, // console output
            {
                type: "dateFile",
                filename: `${ logDirectory }/access-`,
                maxLogSize: 1024,
                pattern: "yyyy-MM-dd.log",
                backups: 3,
                category: "normal",
                alwaysIncludePattern: true,
            },
            {
                type: "dateFile",
                filename: `${ logDirectory }/console-`,
                maxLogSize: 1024,
                pattern: "yyyy-MM-dd.log",
                backups: 10,
                category: "console",
                alwaysIncludePattern: true,
            },
        ],
        replaceConsole: true,
    });
    const logger = log4js.getLogger("normal");
    expressApp.use(log4js.connectLogger(logger, { level: "auto", format: ":method :url" }));

    return log4js;
};
