import assert from "node:assert"

import longestCommonPrefix from '../week_1_intro_arrays/week_1_problems.js'


describe('LongestCommonPrefix', function () {
    let tests = [{ args: ["flower", "flow", "flight"], expect: 'fl' },
    { args: ["dog", "racecar", "car"], expect: '' },
    { args: ["interspecies", "interstellar", "interstate"], expect: 'inters' },
    { args: ["a"], expect: 'a' },
    { args: [], expect: '' },
    { args: ["", "b"], expect: '' },
    { args: ["abc", "abc", "abc"], expect: 'abc' },
    { args: ["apple", "banana", "cherry"], expect: '' },
    { args: ["hello", "hello world", "hello!"], expect: 'hello' }]


    tests.forEach( test => {
        let {args, expect} = test
        if (expect === longestCommonPrefix(args)) {
            it(`should return ${expect} for ${args}`, function () {
                assert.equal(longestCommonPrefix(args), expect)
            })
        }else {
            it(`returned ${longestCommonPrefix(args)} instead of ${expect}`,function() {
                assert.equal(longestCommonPrefix(args), expect)
            })
        }

    })

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


// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
