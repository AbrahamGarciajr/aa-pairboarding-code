
// const  dailyTemperatures = function (temps) {

//     // let res = []

//     // for (let i = 0; i < temps.length; i++) {
//     //     let fast = i + 1
//     //     while (temps[fast] <= temps[i] && fast < temps.length) {
//     //         fast++
//     //     }

//     //     temps[fast] > temps[i] ? res.push(fast - i) : res.push(0)
//     // }

//     // return res

//     let stack = []
//     let ph = 0


// };

// const dailyTemperatures = function (temps) {
//     let res = new Array(temps.length).fill(0)

//     let p1 = 0
//     let p2 = p1 + 1

//     while (p1 < temps.length) {
//         if (temps[p2] > temps[p1]) {
//             res[p1] = p2 - p1
//             p1++
//             p2 = p1 + 1
//         } else if (p2 === temps.length) {
//             p1++
//             p2 = p1 + 1
//         } else {
//             p2++
//         }
//     }
//     return res
// }

const dailyTemperatures = function (temps) {
    let temps1 = [...temps]
    let res = new Array(temps1.length).fill(0)

    while (temps1.length) {
        let i = temps1.length - 2
        // console.log(temps1, the )
        // console.log(res, 'the res')
        let end = temps1.length - 1
        let temp = temps1.pop()

        while (i >= 0) {
            // console.log(temp, temps1[i])
            if (temps1[i] < temp) {
                res[i] = end - i
            }
            i--
        }
    }
    // console.log(res)
    return res
}

// { args: [73, 74, 75, 71, 69, 72, 76, 73], expect: [1, 1, 4, 2, 1, 1, 0, 0] },
//     { args: [30, 40, 50, 60], expect: [1, 1, 1, 0] },
//     { args: [30, 60, 90], expect: [1, 1, 0] }}
export default dailyTemperatures
