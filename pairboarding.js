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
