import assert from "node:assert"

import dailyTemperatures from '../week_5/week_5_problems'


describe('dailyTemperatures', function () {

    //dynamic testing
    let tests = [{ args: [73, 74, 75, 71, 69, 72, 76, 73], expect: [1, 1, 4, 2, 1, 1, 0, 0] },
    { args: [30, 40, 50, 60], expect: [1, 1, 1, 0] },
    { args: [30, 60, 90], expect: [1, 1, 0] },
    { args: [80, 70, 60, 50], expect: [0, 0, 0, 0] },
    { args: [70, 70, 70, 70], expect: [0, 0, 0, 0] },
    { args: [60, 62, 61, 63, 58, 64], expect: [1, 2, 1, 2, 1, 0] },
    { args: [100], expect: [0] },
    { args: [90, 85, 80, 70, 75, 78, 82, 60, 88], expect: [8, 7, 6, 1, 1, 1, 2, 1, 0] }]

    tests.forEach(test => {
        let { args, expect } = test
        if (expect === dailyTemperatures(args)) {
            it(`should return ${expect} for ${args}`, function () {
                assert.equal(dailyTemperatures(args), expect)
            })
        } else {
            it(`returned ${dailyTemperatures(args)} instead of ${expect}`, function () {
                assert.equal(dailyTemperatures(args), expect)
            })
        }

    })
})
