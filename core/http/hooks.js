/**
 * Generic Global Hooks
 */
const { safeRequire } = global;
const bodyParser = require("body-parser");
const compression = require("compression");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const { enableCORS = true, maxFileSize = 52428800 } = safeRequire("configs/base");

module.exports = (expressApp) => {
    expressApp.use(compression());
    expressApp.use(fileUpload({
        limits: {
            fileSize: maxFileSize,
        },
    }));
    expressApp.use(bodyParser.urlencoded({ extended: true }));
    expressApp.use(bodyParser.json());

    if (enableCORS) {
        expressApp.use(cors());
    }
};
