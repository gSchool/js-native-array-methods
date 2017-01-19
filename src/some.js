// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
  return numbers.some(a => a < 0})

}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
  return items.some(a => !a})
}

module.exports = { anyAreNegative, includesFalseyValues }
