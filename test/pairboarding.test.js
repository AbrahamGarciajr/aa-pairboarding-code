// const {assert} = require("node:assert") ;

// const assert = require('node:assert');
import assert from "node:assert"
import characterReplacement from '../pairboarding.js'
// const {characterReplacement} = require("../pairboarding.js")
// console.log(maxProfit([1,24,345,7,2]))

// describe("maxProfit", function () {
//     describe("Highest payoff", function () {

//         it('Should return 4', function (){
//             assert.equal(characterReplacement("AABABBA", 1), 4)
//         } )
//     });
// });


describe('character replacement', function () {
    describe('longest unbroken group of chars', function () {
        it("should return 4 for 'AABABBA' with k = 1", function () {
            assert.strictEqual(characterReplacement("AABABBA", 1), 4);
        });

        it("should return 4 for 'ABAB' with k = 2", function () {
            assert.strictEqual(characterReplacement("ABAB", 2), 4);
        });

        it("should return 5 for 'AAAAA' with k = 2", function () {
            assert.strictEqual(characterReplacement("AAAAA", 2), 5);
        });

        it("should return 1 for 'ABCDE' with k = 0", function () {
            assert.strictEqual(characterReplacement("ABCDE", 0), 1);
        });

        it("should return 3 for 'AAAB' with k = 0", function () {
            assert.strictEqual(characterReplacement("AAAB", 0), 3);
        });

        it("should handle empty string", function () {
            assert.strictEqual(characterReplacement("", 2), 0);
        });

        it("should handle single character string", function () {
            assert.strictEqual(characterReplacement("Z", 3), 1);
        });

        it("should return 5 for 'AABABBAA' with k = 2", function () {
            assert.strictEqual(characterReplacement("AABABBAA", 2), 5);
        });
    })
})
