/**
 * Safe require - will attemp to find the mobule by given path
 *
 * @param rootPath {String} - relative path
 * @return Mixed - safety way to require module
 */
const path = require("path");
const fs = require("fs");
const glob = require("glob-all");

const camelCaseModuleName = name => {
    const [firstPart, ...restParts] = name.split(/[-_]/g);
    const bigFirstLetterNames = restParts.map(item => {
        const [firstLetter, ...restLetters] = item.split("");
        return firstLetter.toUpperCase() + restLetters.join("");
    });

    return firstPart + bigFirstLetterNames.join("");
};

const grabAllModules = (homePath) => {
    const indexPath = `${ homePath }/index.js`;
    const files = glob.sync([
        `${ homePath }/*.js`,
        `!${ indexPath }`,
    ]);

    if (fs.existsSync(indexPath)) {
        return require.call(null, indexPath);
    }

    return files.reduce((modules, file) => {
        const realModules = modules;
        const parseFile = path.parse(file);
        const { name } = parseFile;
        const camelCaseName = camelCaseModuleName(name);

        realModules[camelCaseName] = require.call(null, file);

        return realModules;
    }, {});
};

module.exports = (modulePath) => {
    try {
        return require.call(null, modulePath);
    }
    catch (ex) {
        // Do Something?
    }

    const { cwd } = global;
    const nodeModulesPath = "node_modules";
    const ext = path.extname(modulePath);
    const appModule = path.resolve(cwd, modulePath);
    const appNodeModule = path.resolve(cwd, nodeModulesPath, modulePath);
    const possiblePaths = [
        appModule,
        appNodeModule,
    ];

    if (!ext) {
        possiblePaths.push(`${ appModule }.js`);
        possiblePaths.push(`${ appNodeModule }.js`);
        possiblePaths.push(`${ appModule }/index.js`);
    }

    const exportedModule = possiblePaths.reduce((validPath, item) => {
        const realValidPath = validPath;
        const exists = fs.existsSync(item);
        const isDirectory = exists && fs.statSync(item).isDirectory();
        const moduleStat = {
            isDirectory,
            rootPath: item,
        };

        if (exists) {
            realValidPath.push(moduleStat);
        }

        return realValidPath;
    }, [])[0];

    const { rootPath, isDirectory } = exportedModule || {};

    if (isDirectory) {
        return grabAllModules(rootPath);
    }

    if (rootPath) {
        return require.call(null, rootPath);
    }

    throw new Error(`${ modulePath } Not Found`);
};
