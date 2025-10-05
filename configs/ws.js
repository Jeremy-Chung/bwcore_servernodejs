module.exports = {
    base: "ws-events",
    onConnect: (client) => {
        console.log(client.id);
    },
    onDisconnect: () => {},
};
