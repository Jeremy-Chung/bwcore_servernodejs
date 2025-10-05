const { assert } = require("chai");

/*
## Hamming Distance

> The Hamming distance between two integers is the number of positions at
> which the corresponding bits are different.
> Given two integers x and y, calculate the Hamming distance.

### Note:
0 ≤ x, y < 231.

### Example:

```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```
*/
function paddingZeroLeft(str, len) {
    const lenRemain = len - str.length;
    const paddingLen = new Array(lenRemain > 0 ? lenRemain + 1 : 0);
    const padding = paddingLen.join("0");

    return (padding + str);
}

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
}

describe("hamming distance", () => {
    it("x = 1, y = 4", () => {
        assert.equal(2, hammingDistance(1, 4));
        assert.equal(0, hammingDistance(2, 2));
        assert.equal(1, hammingDistance(2, 3));
        assert.equal(3, hammingDistance(10, 4));
    });
});
