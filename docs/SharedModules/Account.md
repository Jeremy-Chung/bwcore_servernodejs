# Account

> Get and verify account from keycloak

## Path
`/shared_modules/passport/account`

## Usage
> token(_username_, _password_)
>
> * @param **username** _String_ - User Name
> * @param **password** _String_ - Password
> 
> * @return **Promise**
> 
> userInfo(_accessToken_)
>
> * @param **accessToken** _String_ - Access Token fetched from `token()`
> 
> * @return **Promise**

## Example
```
const account = require('minions/shared_modules/passport/account');
const { account, userInfo } = account;

account.info('user', 'password').then(response => {
	return userInfo(response.access_token);
}).catch(err => console.error(err));
```
----

Back to: [Shared Modules](../SharedModules.md)