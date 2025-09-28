import assert from "node:assert";

// const assert = require('node:assert');

try {
    ({ maxProfit } = require('../pairboarding.js'));
} catch (e) { console.log("Failed to load dependencies") }

// console.log(maxProfit([1,24,345,7,2]))

describe("maxProfit", function () {
    describe("Highest payoff", function () {
        it("Should return the highest profit made in a array of prices for each day", function () {
            assert.equal([7,1,5,3,6,4], 5);
        });

        it('Should return 0 because the area does not have the ability to make a profit.', function (){
            assert.equal(maxProfit([7,6,4,3,1]), 0)
        } )
    });
});
