/**
 * Get base config
 */
const { cwd, frameworkRoot, safeRequire } = global;
const frameworkBaseConfig = require.call(null, "../../configs/base");

let out = frameworkBaseConfig;

if (cwd !== frameworkRoot) {
    try {
        out = Object.assign(
            frameworkBaseConfig,
            safeRequire("configs/base")
        );
    }
    catch (ex) {
        out = frameworkBaseConfig;
    }
}

module.exports = out;
