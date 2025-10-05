# Shared Modules

## Home
`/shared_modules`

> File Name is module name

## Example
```
// Load modules
const { modules } = require('minions');

// get timestamp
console.log(modules.timestamp()); // 1494393617672
```

or 

```
// There is a module `/shared_modules/timestamp`
const modules = require('minions/shared_modules');

// get timestamp
console.log(modules.timestamp()); // 1494393617672
```

## Module List

1. [Error](./SharedModules/Error.md)
2. [Passport](./SharedModules/Passport.md)
3. [RNG](./SharedModules/RNG.md)
4. [Timestamp](./SharedModules/Timestamp.md)
5. [UUID](./SharedModules/UUID.md)