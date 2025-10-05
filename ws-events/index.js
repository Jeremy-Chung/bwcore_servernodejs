/**
 * Define websocket events here or merge multiple events here
 */
module.exports = io => [{
    name: "message",
    validation: {
        // Using: (bw-prop-type)[http://bb.allstar-interactive.com:7990/projects/BG/repos/bwcore_proptype/browse]
    },
    action: (client, message) => {
        io.emit("event-name", {});
        client.emit("response", message);
    },
}];
