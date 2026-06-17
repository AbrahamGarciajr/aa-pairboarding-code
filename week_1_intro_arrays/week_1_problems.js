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


export function longestCommonPrefix (strs) {

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


// export default longestCommonPrefix



///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.



// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]



export function getConcatenation (nums) {
    // console.log([...nums,...nums], nums.concat(nums))
    return nums.concat(nums)
}

// export default getConcatenation

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2




///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
