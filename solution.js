// This solution computes the maximum possible weight of an array
// after at most one operation of increasing a single element by 1.
// The weight is defined as sum_{i<j}(a_i - a_j)^2.
// We use the formula: weight = n*sum(a[i]^2) - (sum(a[i]))^2.
// By increasing a[k] by 1, the change in weight (delta) is:
// delta = 2*n*a[k] - 2*sum(a) + (n - 1).
// So we can compute the original weight and then try each element to maximize weight increment.
// If all deltas are negative, no operation is performed.

// Runtime: O(n) time and O(1) extra space.

'use strict';

// Read input from STDIN (useful if running from node)

function main() {
    const fs = require('fs');
    let input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);
    let n = input[0];
    let arr = input.slice(1, n + 1);

    // Compute sum and sum of squares
    let sum = 0;
    let sumSquares = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
        sumSquares += arr[i] * arr[i];
    }

    // Original weight, using formula: n*sum(x^2) - (sum(x))^2
    let originalWeight = n * sumSquares - sum * sum;

    // Compute maximum possible delta
    let maxDelta = 0;  // no operation if delta is negative
    for (let i = 0; i < n; i++) {
        let delta = 2 * n * arr[i] - 2 * sum + (n - 1);
        if (delta > maxDelta) {
            maxDelta = delta;
        }
    }
    
    let ans = originalWeight + maxDelta;
    console.log(ans);
}

main();