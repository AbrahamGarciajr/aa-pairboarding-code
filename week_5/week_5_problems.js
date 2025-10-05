



const  dailyTemperatures = function (temps) {

    // let res = []

    // for (let i = 0; i < temps.length; i++) {
    //     let fast = i + 1
    //     while (temps[fast] <= temps[i] && fast < temps.length) {
    //         fast++
    //     }

    //     temps[fast] > temps[i] ? res.push(fast - i) : res.push(0)
    // }

    // return res

    let stack = []
    let ph = 0

    for (let i = 1; i < temps.length; i++) {
        if (temps[i] > temps[ph]) {
            stack
        }
    }
};


export default dailyTemperatures
