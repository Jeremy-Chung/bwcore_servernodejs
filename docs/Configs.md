# Configs

## Home
`/configs`

## Reserved File Names (`public` config)

* [base.js](./BasicSettings.md)
* [redis.js](./Redis.md)
* [ws.js](./WebSocket.md)
* [wallets.js](./Wallets.md)

> The rest config files apart from reserved names that will become `local` configs

## How To Get
```
const { configs } = require('minions');

// or

const { safeRequire } = global;
const configs = safeRequire("configs");
```

## Output
```
// file name as the key
{
    base: { ... },
    redis: { ... },
    ws: { ... },
    .
    .
    .
}
```