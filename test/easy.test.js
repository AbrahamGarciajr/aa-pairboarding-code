import assert from "node:assert"

import twoSum from '../blind75/easy.js'


describe('TwoSum', function () {

    //dynamic testing
    let tests = [
        { args: [[2, 7, 11, 15], 9], expect: [0, 1] },
        { args: [[3, 2, 4], 6], expect: [1, 2] },
        { args: [[3, 3], 6], expect: [0, 1] },
        { args: [[-1, -2, -3, -4, -5], -8], expect: [2, 4] },
        { args: [[0, 4, 3, 0], 0], expect: [0, 3] },
        { args: [[1, 2, 3], 100], expect: undefined }
    ];
    tests.forEach(test => {
        const { args, expect } = test;
        const result = twoSum(...args);

        it(`should return ${JSON.stringify(expect)} for nums=${JSON.stringify(args[0])} target=${args[1]}`, function () {
            assert.deepStrictEqual(result, expect);
        });
    });


    //old fashion write it all out testing

    // it('Should return "fl" from ["flower","flow","flight"]', function () {
    //     assert.equal(longestCommonPrefix([["flower", "flow", "flight"]]), 'fl')
    // });

    // it('Should return "" from ["dog","racecar","car"] (no common prefix)', function () {
    //     assert.equal(longestCommonPrefix(["dog", "racecar", "car"]), '');
    // });

    // it('Should return "inters" from ["interspecies","interstellar","interstate"]', function () {
    //     assert.equal(longestCommonPrefix(["interspecies", "interstellar", "interstate"]), 'inters');
    // });

    // it('Should return "a" from ["a"] (single string)', function () {
    //     assert.equal(longestCommonPrefix(["a"]), 'a');
    // });

    // it('Should return "" from [] (empty array)', function () {
    //     assert.equal(longestCommonPrefix([]), '');
    // });

    // it('Should return "" from ["","b"] (one empty string)', function () {
    //     assert.equal(longestCommonPrefix(["", "b"]), '');
    // });

    // it('Should return "abc" from ["abc","abc","abc"] (all identical)', function () {
    //     assert.equal(longestCommonPrefix(["abc", "abc", "abc"]), 'abc');
    // });

    // it('Should return "" from ["cir","car"] (only first char differs)', function () {
    //     assert.equal(longestCommonPrefix(["cir", "car"]), 'c');
    // });

    // it('Should return "" when no common prefix at all', function () {
    //     assert.equal(longestCommonPrefix(["apple", "banana", "cherry"]), '');
    // });

    // it('Should return "hello" from ["hello","hello world","hello!"]', function () {
    //     assert.equal(longestCommonPrefix(["hello", "hello world", "hello!"]), 'hello');
    // });
})
