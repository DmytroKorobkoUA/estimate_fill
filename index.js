function estimate(levels) {
    const n = levels.length;
    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    leftMax[0] = levels[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], levels[i]);
    }

    rightMax[n - 1] = levels[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], levels[i]);
    }

    let totalOil = 0;
    for (let i = 0; i < n; i++) {
        totalOil += Math.min(leftMax[i], rightMax[i]) - levels[i];
    }

    return totalOil;
}

// Case 1: [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const case1 = [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(`Input: ${case1} | Expected Result: 6 | Actual Result: ${estimate(case1)}`);

// Case 2: [3, 0, 2, 0, 4]
const case2 = [3, 0, 2, 0, 4];
console.log(`Input: ${case2} | Expected Result: 7 | Actual Result: ${estimate(case2)}`);

// Case 3: [2, 0, 0, 2]
const case3 = [2, 0, 0, 2];
console.log(`Input: ${case3} | Expected Result: 4 | Actual Result: ${estimate(case3)}`);

// Additional case: [33, 33, 5, 7]
const additionalTest = [33, 33, 5, 7];
console.log(`Input: ${additionalTest} | Expected Result: 2 | Actual Result: ${estimate(additionalTest)}`);
