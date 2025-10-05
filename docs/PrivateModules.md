# Private Modules

> Read [Official Documentation](https://nodejs.org/api/modules.html) First

## Example

```
# FileA.js

module.exports = (char) => {
    return char.toUpperCase() === 'A';
};

# FileB.js
const isA = require('FileA.js');

console.log(isA('a'));	// true
console.log(isA('A'));	// true
console.log(isA('b'));	// false
```


	
