// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
  return numbers.some(function(a, b) {
    return a < 0;
  });
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
  return items.some(function(a) {
    return isNaN(a) || a === '' || a === 0 || a === null || a == undefined || a === false
  })
}

module.exports = { anyAreNegative, includesFalseyValues }
