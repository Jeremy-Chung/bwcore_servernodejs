# Basic Settings

> Each routing file **must** in the folder `/routes`

## With Routing Config
> You may have many different routing files with different purposes.

> Don't worry minions will group them together.

> Make sure you have individual path.

```
/**
 * Setting up env basic configuration
 */
module.exports = [
    {
        path: '/',
        method: 'get',
        action: (req, res, next) => {
            // DO SOMETHING
        }
    }
];
```

* `path`   - http uri path
* `method` - http method: get/post/put/delete/all
* `action` - what you wanna do in this path

## With Expressjs Original Way
> Following [Official Guild](http://expressjs.com/en/guide/routing.html)
```
const { app } = require('minions');
app.get('/', (req, res, next) => {
    // DO SOMETHING
});

```
> **WARNING**: DO NOT MIX BOTH WAY TOGETHER