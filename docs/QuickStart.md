# Quick Start

## Installation

1. Install `node.js` and `npm` first.
1. Run `git+ssh://git@bb.allstar-interactive.com:7999/bg/bwcore_servernodejs.git` To install latest version
1. In case you need to install specific version. Run with version
    > `git+ssh://git@bb.allstar-interactive.com:7999/bg/bwcore_servernodejs.git#v1.0.4`

## Folder Structure

```
app
└── configs (OVERWRITABLE)
    ├── [base.js](BasicSettings.md)
    ├── [redis.js](Redis.md)
    ├── [wallets.js](Wallets.md)
    ├── [ws.js](WebSocket.md)
└── core (main functions. DO NOT CHANGE)
└── route (Define HTTP APIs)
└── shared_modules (Shared Modules)
    ├── [error](./SharedModules/Error.md)
    ├── [validation Error](./SharedModules/Error.md)
    ├── [passport](./SharedModules/Error.md)
    ├── [rng](./SharedModules/Error.md)
    ├── [timestamp](./SharedModules/Error.md)
    ├── [uuid](./SharedModules/Error.md)

        └── screens
            ├── Admin
            │   └── screens
            │       ├── Reports
            │       └── Users
            └── Course
                └── screens
                    └── Assignments
```
