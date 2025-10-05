/**
 * Response
 */
module.exports = (expressApp) => {
    expressApp.use((req, res, next) => {
        const send = res.send.bind(res);

        res.send = (message) => {
            send(message);
        };

        next();
    });
};
