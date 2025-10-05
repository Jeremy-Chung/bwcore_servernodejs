## Listen To [Theme Song](https://www.youtube.com/watch?v=sFukyIIM1XI) First

## Environment Requirements
1. Nodejs 6.8 +
1. Redis 3.2.8

## Installation
1. mkdir /YOUR_PROJECT
1. cd /YOUR_PROJECT
1. npm init
1. npm i --save git+ssh://git@bb.allstar-interactive.com:7999/bg/bwcore_servernodejs.git

## Install a Specific Version
```
npm i --save git+ssh://git@bb.allstar-interactive.com:7999/bg/bwcore_servernodejs.git#[EXISTING_VERSION_TAG]
```
> npm i --save git+ssh://git@bb.allstar-interactive.com:7999/bg/bwcore_servernodejs.git#v1.0.0

See [Changelog](./changelog.md)

## Features
* Http ([Expressjs API Reference](http://expressjs.com/en/4x/api.html))
* WebSocket ([Socket.io API Reference](https://socket.io/docs/))
* [log4js](http://stritti.github.io/log4js/)
* [caminte](http://www.camintejs.com/en/guide) Cross-db ORM. The following adapters are supported so far:
    1. mongodb
    2. redis
    3. mysql

## Testing
> Run `npm test`

## Go To Wiki
Install **Any** Markdown Veiwer first

> Run `npm start`
>
> Going to [Here](/docs/Home.md)
