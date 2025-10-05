const { assert } = require("chai");

const cwd = process.cwd();
const timestamp = require.call(null, `${ cwd }/shared_modules/timestamp`);

describe("timestamp", () => {
    it("is an integer", () => {
        assert.equal(true, Number.isInteger(timestamp()));
    });
});
