# Basic Settings

> Basic config is `/configs/base.js`

```
/**
 * Setting up env basic configuration
 */
module.exports = {
    port: 3001,
    httpErrorHandler: (err, req, res, next) => {
        res.status(500).send({
            status: 'error',
            message: err.message,
        });
    },
    staticRoutes: [{
        route: '/public',   // routing name
        path: 'public' ,    // folder path
    }],
    loggingPath: './log',
    numClusters: 0,
};
```

* `port` - application to listen. Don't be duplicated. (Default: 3001)
* `httpErrorHandler` - http error handler
* `loggingPath` - Instead of `console` object (Default: `/log`)
* `staticRoutes` - static routing settings
* `numClusters` - How many clusters being used. 0 means stop using cluster (Default: 0)