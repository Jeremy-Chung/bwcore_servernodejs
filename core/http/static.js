/**
 * Static Routes
 */
const express = require("express");

const baseConfig = require.call(null, "./config");
const {
    staticRoutes = [],
} = baseConfig;

module.exports = (expressApp) => {
    staticRoutes.forEach(setting => {
        expressApp.use(setting.route, express.static(setting.path));
    });
};
