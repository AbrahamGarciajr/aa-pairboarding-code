// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


const longestCommonPrefix = function (strs) {

    // let longest = strs ? strs[0] : ''
    // for (let i = 1; i < strs.length; i++) {
    //     let pre = 0
    //     let word = strs[i]
    //     while (pre < longest.length) {
    //         if (word[pre] !== longest[pre]) {
    //             longest = longest.slice(0, pre)
    //         }
    //         pre++
    //     }

    //     if (longest.length < 1) {
    //         return longest
    //     }
    // }

    // return longest

    let longest = strs[0] ? strs[0] : ''

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(longest) !== 0) {
            longest = longest.slice(0, longest.length - 1)
        }

        if (!longest) return ''
    }

    return longest
}


export default longestCommonPrefix



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
