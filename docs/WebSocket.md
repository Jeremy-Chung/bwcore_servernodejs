# Web Socket

## Home
`/configs/ws.js`

## API Doc
[Socket.io](https://socket.io/docs/server-api/)

## Config Format
```
module.exports = {
    onConnect: (client) => {
        console.log(client.id);
    },
    onDisconnect: (reason) => {},
    events: [{
        name: 'message',
        action: (client, message) => {
            client.emit('response', message);
        }
    }]
};
```

* `base` _String_ - Events home
* `onConnect` _Function_ - Callback when connected
* `onDisconnect` _Function_ - Callback when disconnected

## Define events

* io - _Object_ - Socket.IO base object
    * Return _ArrayObject_
        * `name` _String_ - Event name
        * `validation` _Json_ - Validate arguments. (bw-prop-type)[http://bb.allstar-interactive.com:7990/projects/BG/repos/bwcore_proptype/browse]
        * `action` _Function_(_Client:Object_, _Message:Mixed_) - Action will be fired
