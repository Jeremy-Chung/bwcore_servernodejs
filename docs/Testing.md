# Testing
> Unit Test Here Only.

## Home
`/test`

## Guild
1. [Mocha](https://mochajs.org/)
1. [Chai](http://chaijs.com/api/)

## Command
> npm run test

## Guildline
[Refer](https://github.com/ghsukumar/SFDC_Best_Practices/wiki/F.I.R.S.T-Principles-of-Unit-Testing)

* Fast

	* A developer should not hesitate to run the tests as they are slow.
	* All of these including setup, the actual test and tear down should execute really fast (milliseconds) as you may have thousands of tests in your entire project.

* Isolated/Independent

	* A test method should do the 3 As => Arrange, Act, Assert
	* Arrange: The data used in a test should not depend on the environment in which the test is running. All the data needed for a test should be arranged as part of the test.
Act: Invoke the actual method under test.
	* Assert: A test method should test for a single logical outcome, implying that typically there
should be only a single logical assert. A logical assert could have multiple physical asserts as
long as all the asserts test the state of a single object. In a few cases, an action can update
multiple objects.
	* Avoid doing asserts in the Arrange part, let it throw exceptions and your test will still fail.
No order-of-run dependency. They should pass or fail the same way in suite or when run individually.
Do not do any more actions after the assert statement(s), preferably single logical assert.

* Repeatable

	* A test method should NOT depend on any data in the environment/instance in which it is running.
	* Deterministic results - should yield the same results every time and at every location where they run.
	
		No dependency on date/time or random functions output.	
	* Each test should setup or arrange it's own data.
What if a set of tests need some common data? Use Data Helper classes that can setup this data for re-usability.

* Self-Validating

	* No manual inspection required to check whether the test has passed or failed.
	
* Thorough and Timely

	* Should cover every use case scenario and NOT just aim for 100% coverage.
	* Should try to aim for Test Driven Development (TDD) so that code does not need re-factoring later.

## Example

```
const assert = require('chai').assert;
/*
## Hamming Distance

> The Hamming distance between two integers is the number of positions at
> which the corresponding bits are different.
> Given two integers x and y, calculate the Hamming distance.

### Note:
0 ≤ x, y < 231.

### Example:


Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

function paddingZeroLeft(str, len) {
    const lenRemain = len - str.length;
    const paddingLen = new Array(lenRemain > 0 ? lenRemain + 1 : 0);
    const padding = paddingLen.join('0');

    return (padding + str);
};

function hammingDistance(x, y) {
    const binX = (x >>> 0).toString(2);
    const binY = (y >>> 0).toString(2);
    const longestLen = Math.max(binX.length, binY.length);
    const paddingX = paddingZeroLeft(binX, longestLen);
    const paddingY = paddingZeroLeft(binY, longestLen);
    let diff = 0;

    for (let i = 0; i < longestLen; i++) {
        if (paddingX[i] !== paddingY[i]) {
            diff += 1;
        }
    }

    return diff;
};

describe('hamming distance', function() {
    it('x = 1, y = 4', function() {
        assert.equal(2, hammingDistance(1, 4));
        assert.equal(0, hammingDistance(2, 2));
        assert.equal(1, hammingDistance(2, 3));
        assert.equal(3, hammingDistance(10, 4));
    });
});
```