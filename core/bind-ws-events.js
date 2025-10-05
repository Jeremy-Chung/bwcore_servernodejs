/**
 * Load and attach web socket events
 */
const { safeRequire } = global;
const redis = require("socket.io-redis");
const socketIO = require("socket.io");

module.exports = application => {
    let wsConfig;

    try {
        wsConfig = safeRequire("configs/ws");
    }
    catch (ex) {
        // websocket config is not existing
    }


    const { http } = application;
    const { hostname, port, passphrase } = require.call(null, "../configs/redis");
    const args = { host: hostname, port };
    const validator = (validation, message) => {
        const keys = Object.keys(validation);

        keys.forEach(key => {
            validation[key].test(message[key], key);
        });
    };
    let io;

    if (passphrase) {
        args.auth_pass = passphrase;
    }

    if (wsConfig) {
        io = socketIO(http, { "transports": ["websocket"] });

        const wsEvents = safeRequire(wsConfig.base)(io);

        io.adapter(redis(args));

        io.on("connection", client => {
            wsConfig.onConnect(client);

            wsEvents.forEach(item => {
                const { name, action, validation } = item;

                client.on(name, message => {
                    if (validation) {
                        try {
                            validator(validation, message);
                        }
                        catch (err) {
                            client.emit("error", err);
                            return;
                        }
                    }

                    action(client, message);
                });
            });

            client.on("error", (err) => {
                console.error(err);
                client.emit("internal-error", {
                    code: err.code || 999,
                    message: err.message,
                    name: err.name,
                });
            });

            client.on("disconnect", wsConfig.onDisconnect);
        });
    }

    return io;
};
