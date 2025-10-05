# Error

> Generic Error Object

## Path
`/shared_modules/error`

> error(_message_, _errorcode_)
>
> * @param **message** _String_ - Error Message
> * @param **errorcode** _Number_ - Error Code
> * @param **httpCode** _Number_ - Http Status Code
>
> * @return **Error**

## Example
```
const { modules } = require('minions');
const { error } = modules;

throw error('Not Found', 9999, 404); // Error: Not Found
```

or

```
const error = require('minions/shared_modules/error');

throw error('Not Found', 404); // Error: Not Found
```
----

Back to: [Shared Modules](./SharedModules.md)