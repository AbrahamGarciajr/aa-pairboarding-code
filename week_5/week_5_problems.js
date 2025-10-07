
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

const dailyTemperatures = function (temps) {
    let res = new Array(temps.length).fill(0)

    let p1 = 0
    let p2 = p1 + 1

    while (p1 < temps.length) {
        if (temps[p2] > temps[p1]) {
            res[p1] = p2 - p1
            p1++
            p2 = p1 + 1
        } else if (p2 === temps.length) {
            p1++
            p2 = p1 + 1
        } else {
            p2++
        }
    }
    return res
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))


// { args: [73, 74, 75, 71, 69, 72, 76, 73], expect: [1, 1, 4, 2, 1, 1, 0, 0] },
//     { args: [30, 40, 50, 60], expect: [1, 1, 1, 0] },
//     { args: [30, 60, 90], expect: [1, 1, 0] }}
export default dailyTemperatures
