// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
    return numbers.some(e => e < 0);
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
    // [NaN, undefined, null, 0, false, '']
    return items.some(e => ((e === '') ||( e === null) || (e === false) || (e === undefined) || (e === 0) || (isNaN(e))));
}

module.exports = { anyAreNegative, includesFalseyValues }
