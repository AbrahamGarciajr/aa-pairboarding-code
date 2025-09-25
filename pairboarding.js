// let maxOfThree = function (array) {
//     //store numbers and index within POJO
//     if (array.length < 4) {
//         return array.reduce((acc, curr) => {
//             return acc * curr
//         }, 1)
//     }
//     // let holder = []
//     //iterate through,
//     array = array.sort((a, b) => b - a)
//     // console.log(array)

// const { captureOwnerStack } = require("react")

//     return Math.max(array[0] * array[1] * array[2], array[0] * array[array.length - 1] * array[array.length - 2])
// }






// console.log(maxOfThree([10, 3, 5, 6, 20])) // Output: 1200. Multiply 10, 6, 20

// console.log(maxOfThree([-10, -3, -5, -6, -20])) // Output: -90

// console.log(maxOfThree([1, -4, 3, -6, 7, 0])) // Output: 168

// console.log(maxOfThree([1, 2])) // Output: 2

// console.log(maxOfThree([1, -4, 0])) // Output: 0


// function intersection(firstArray, secondArray) {
//     if (firstArray.length < 1 || secondArray.length < 1) return 'no matches'
//     let res = []
//     let map = new Map()
//     for (let i = 0; i < firstArray.length; i++) {
//         if (!map.has(firstArray[i])) {
//             map.set(firstArray[i], i)
//         }
//     }

//     for (let i = 0; i < secondArray.length; i++) {
//         if (map.has(secondArray[i])) {
//             map.
//             res.push(secondArray[i])
//         }
//     }

//     return res
// }




// const firstArray = [2, 2, 4, 1];
// const secondArray = [1, 2, 0, 2];

// console.log(intersection(firstArray, secondArray)); // Output: [2, 1]



// class Stack {
//     constructor() {
//         this.q1 = []
//         this.q2 = []
//     }


//     push(el) {
//         this.q1.push(el)
//     }

//     pop() {
//         let el
//         while (this.q1.length) {
//             el = this.q1.shift()
//             if (this.q1.length) {
//                 this.q2.push(el)
//             }
//         }

//         this.q1 = this.q2
//         this.q2 = []
//         return el
//     }

//     top() {
//         let el = this.pop()
//         this.push(el)
//         return el
//     }

//     isEmpty() {
//         return this.q1.length <= 0
//     }

// }


// const s = new Stack()
// s.push(2)
// s.push(5)
// console.log(s.pop())
// s.push(10)
// s.push(143)
// console.log(s.pop())
// console.log(s.pop())
// console.log(s.pop())
// s.push(3)
// s.push(9)
// // console.log(s.pop())
// // console.log(s.pop())
// const m = new Stack()

// console.log(s.top(), s.q1)

// console.log(s.isEmpty(), m.isEmpty())

// import DOMParser

// async function secretMessage(url) {
//     let resClone
//     try {
//         let res = await fetch(url)
//         // resClone = await res.clone()
//         let data = await res.text()
//         // console.log( typeof data)
//         let actualData = data.split('The table below contains the input data needed to solve the coding assessment exercise')[1]
//         console.log(actualData[10])
//         // actualData = actualData.split('c0>')
//         // for(let i = 0; i < 50; i++){
//         //     console.log(actualData[i])
//         // }
//     } catch (error) {
//         console.log('error with:', error)
//         // let text = await resClone.text()
//         // console.log('error text:', text)
//     }


// }

// async function secretMessage(url) {
//     let resClone
//     try {
//         let res = await fetch(url)
//         // resClone = await res.clone()
//         let data = await res.text()
//         // console.log( typeof data)
//         // let parser = new DOMParser()
//         // let xmlDoc = parser.parseFromString(data, 'application/xml')
//         // let actualData = data.split('The table below contains the input data needed to solve the coding assessment exercise')[1]
//         // console.log(xmlDoc)
//         // let items = xmlDoc.getElementsByClassName('c4')
//         // console.log(items)
//         let lines = data.split('\n')
//         // console.log(lines)
//         // console.log(lines[198])
//         let stuff = lines[198].split('/style')[2]
//         console.log(stuff)
//      } catch (error) {
//         console.log('error with:', error, resClone)
//         // let text = await resClone.text()
//         // console.log('error text:', text)
//     }


// }


// const sheetUrl = 'https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub'; // e.g., https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pub?output=csv

// fetch(sheetUrl)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         // If published as CSV, use response.text()
//         // If published as JSON, use response.json()
//         return response.text();
//     })
//     .then(data => {
//         console.log(data); // Process the CSV or JSON data here
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

// secretMessage('https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub')


// import requests
// import re





// Isomorphic Strings
// Overview: For two strings to be isomorphic, all occurrences of a character in string A can be replaced with
//  another character to get string B. The order of the characters must be preserved.
// There must be one-to-one mapping for every char of string A to every char of string B.

// paper and title would return true. egg and sad would return false. dgg and add would return true.

// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false
// This problem should be completed in O(N) time and O(N) space.


// let isIsomorphic = function (a, b) {
//     if (a.length !== b.length) return false

//     //create obj to record how many chars in each string
//     let charFreq = {}
//     // let charFreq2 = {}
//     //iterate over both string and record freq of chars in obj
//     for (let i = 0; i < a.length; i++) {
//         if (!charFreq[a[i]]) {
//             charFreq[a[i]] = b[i]
//         }
//     }
//     let str = ''
//     //iterate over entries in obj to see if they match
//     for (let i = 0; i < a.length; i++) {
//         str += charFreq[a[i]]
//     }


//     return str == b

// }


// console.log(isIsomorphic("egg", 'add')); // true
// console.log(isIsomorphic("paper", 'title')); // true
// console.log(isIsomorphic("kick", 'side')); // false
// console.log(isIsomorphic("egge", 'adad')) //false




// Overview: Write a method, isBalanced, that will evaluate if a given expression has balanced parentheses.

// Example:

// Input: "(())()()"
// Output: True
// Input: ")()()"
// Output: False


//stack arr
// ( push to stack
//if !stack.length && para[i] === ) return false
// ) pop from stack


// return !stack.length



// let skyline = function (grid) {
//     let top = []
//     let side = []
//     let res = 0
//     let arr = new Array(grid.length).fill(new Array(grid[0].length).fill(0))

//     for (let i = 0; i < grid.length; i++) {
//         // console.log(grid[i])
//         side.push(Math.max(...grid[i]))
//     }

//     for (let i = 0; i < grid[0].length; i++) {
//         let temp = []
//         for (let j = 0; j < grid.length; j++) {
//             temp.push(grid[j][i])
//         }
//         // console.log()
//         top.push(Math.max(...temp))
//     }
//     console.log

//     for (let i = 0; i < grid.length; i++) {
//         let row = grid[i]
//         // console.log(row)
//         for (let j = 0; j < row.length; j++) {
//             let col = row[j]
//             if (col < Math.min(top[j], side[i])) {
//                 res += Math.min(top[j], side[i]) - col
//                 col = Math.min(top[j], side[i])
//                 arr[col] = Math.min(top[j], side[i])
//             }
//         }
//     }

//     console.log(res)
//     return res
// }


// //y axis        [9, 4, 8, 7]

// // x axis
// // [8,
// //  7,
// //  9,
// //  3]


// skyline([[3, 0, 8, 4],
// [2, 4, 5, 7],
// [9, 2, 6, 3],
// [0, 3, 1, 0]])


// grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// grid2 = [
//   [4, 0, 2],
//   [3, 1, 5],
//   [1, 4, 0]
// ]
// skyline(grid)
// skyline(grid2)
// // topBottom = [7, 8, 9]
// // leftRight = [3, 6, 9]





// function maxOfThree(nums) {
//     // nums.sort((a, b) => b - a)
//     // console.log(nums[0] * nums[1] * nums[2])
//     // console.log(nums)
//     let i = 0
//     let j = i + 1
//     let k = nums.length - 1
//     let largest = -Infinity
//     while (i < k) {
//         if (j >= k) {
//             i++
//             j = i + 1
//             k = nums.length - 1
//         }
//         if(j === k){
//             break
//         }
//         let prod = nums[i] * nums[j] * nums[k]
//         if (largest < prod) largest = prod

//         if (nums[j] < nums[k]) {
//             j++
//         } else {
//             k--
//         }
//     }
//     console.log(largest)
// }


// maxOfThree([10, 3, 5, 6, 20]) // Output: 1200. Multiply 10, 6, 20

// maxOfThree([-10, -3, -5, -6, -20]) // Output: -90

// maxOfThree([1, -4, 3, -6, 7, 0]) // Output: 168



// const findLargestDifference = function (nums) {
//     let highest = 0
//     let lowest = 0

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[highest] < nums[i]) {
//             highest = i
//         }

//         if (nums[lowest] > nums[i] && i < highest) {
//             lowest = i
//         }
//     }

//     console.log(nums[highest] - nums[lowest])
// }
// findLargestDifference([1, 6, 5, 2, 9, -2])


//   9/21 - 9/27



// Write a function that takes in a string and that returns its longest substring without duplicate characters. Assume that there will only be one longest substring without duplication.

// Sample Input: "clementisacap"
// Sample Output: "mentisac"


// var threeSum = function (nums) {
//     let res = []
//     let track = {}

//     nums.sort((a, b) => a - b)

//     for (let i = 0; i < nums.length - 1; i++) {
//         let j = i + 1
//         let k = nums.length - 1
//         while (j !== k) {
//             let key = [nums[i], nums[j], nums[k]].sort().join(',')
//             if (nums[i] + nums[j] + nums[k] === 0 && track[key] !== 1) {
//                 res.push([nums[i], nums[j], nums[k]])
//                 track[key] = 1
//             }
//             if (nums[i] + nums[j] + nums[k] > 0) {
//                 k--
//             } else {
//                 j++
//             }
//         }
//     }

//     return res
// };



// const generate = function (numRows) {
//     let first = [1]
//     if (numRows === 1) return [first]
//     let second = [1, 1]
//     if (numRows === 2) return [first, second]
//     let res = [first, second]
//     let i = numRows - 2

//     while (i > 0) {
//         let row = []
//         let prev = res[res.length - 1]
//         for (let j = 0; j <= prev.length; j++) {
//             // console.log(row)
//             if (prev[j] && prev[j - 1]) {
//                 row.push(prev[j] + prev[j - 1])
//             } else {
//                 row.push(1)
//             }
//         }
//         res.push(row)
//         i--
//     }

//     return res
// }


// console.log(generate(6))

// var subarraySum = function (nums, k) {
//     let subNum = {
//         0: 1
//         //      1:1
//         //7:1
//         //2:1
//         //6:1
//         //9:1
//     };
//     let total = 0, count = 0;

//     for (const n of nums) {
//         total += n;
//         // adding 1 making it 1
//         // adding 6 making it 7
//         // adding 2 making it 9
//         // adding 4 making it 13
//         // adding 3 making it 16
//         //adding 7 making it 23
//         if (subNum[total - k] !== undefined) {
//             //subNum[16]
//             count += subNum[total - k];
//             //nope
//             // count += 1 making it 1
//             //nope
//             //nope
//             // count += 1 making it 2
//         }

//         subNum[total] = (subNum[total] || 0) + 1;
//         //subNum[1] = 1
//         //subNum[7] = 1
//         //subNum[9] = 1
//         //subNum[13] = 1
//         //subNum[16] = 1

//         console.log(subNum, total, count)

//     }

//     return count;
// };

// console.log(subarraySum([1, 6, 2, 4, 3, 7], 7)) /// output 3



// Given an array of strings strs, group the anagrams together. You can return the answer in any order.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]











// 1652. Defuse the Bomb
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

// If k > 0, replace the ith number with the sum of the next k numbers.
// If k < 0, replace the ith number with the sum of the previous k numbers.
// If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n-1] is code[0], and the previous element of code[0] is code[n-1].

// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!



// Example 1:

// Input: code = [5,7,1,4], k = 3
// Output: [12,10,16,13]
// Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.
// Example 2:

// Input: code = [1,2,3,4], k = 0
// Output: [0,0,0,0]
// Explanation: When k is zero, the numbers are replaced by 0.
// Example 3:

// Input: code = [2,4,9,3], k = -2
// Output: [12,5,6,13]
// Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the previous numbers.


// var decrypt = function (code, k) {
//     let sum = code[1] + code[2] + code[3]
//     let res = new Array(code.length).fill(0)
//     if (k === 0) return res
//     for (let i = 0; i < code.length; i++) {
//         if (k > 0) {
//             let j = i
//             let count = 0
//             while (count < k) {
//                 j++
//                 if (j >= code.length) {
//                     j = 0
//                 }
//                 res[i] += code[j]
//                 count++
//             }
//         }
//         if (k < 0) {
//             let j = i
//             let count = 0
//             while (count < Math.abs(k)) {
//                 j--
//                 if (j < 0) {
//                     j = code.length - 1
//                 }
//                 res[i] += code[j]
//                 count++
//             }
//         }
//     }

//     return res
// }

var decrypt = function (code, k) {
    let n = code.length
    let result = new Array(n).fill(0); //n
    if (k === 0) return result;
    let left = 0;
    let runningTotal = 0;

    for (let right = 0; right < n + Math.abs(k); right++) { //n+k
        runningTotal += code[right % n];

        if (right - left + 1 > Math.abs(k)) {
            runningTotal -= code[left % n];
            left = (left + 1) % n;
        }

        if (right - left + 1 === Math.abs(k)) {
            if (k > 0) {
                result[(left + n - 1) % n] = runningTotal;
            } else if (k < 0) {
                result[(right + 1) % n] = runningTotal;
            }
        }
    }
    return result;
}

console.log(decrypt([5, 7, 1, 4], 3))
console.log(decrypt([1, 2, 3, 4], 0))
console.log(decrypt([2, 4, 9, 3], -2))
