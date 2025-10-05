/**
 * Start Http Service
 */
const baseConfig = require.call(null, "./config");
const {
    port = 3000,
} = baseConfig;

module.exports = (expressApp, http) => {
    http.listen(port, () => {
        console.log(`* Starting Env: [${ process.env.NODE_ENV || "development" }]`);
        console.log("* Listen to port: %s", port);
    });
};
