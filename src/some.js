// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
  return numbers.some(number => {
    return number<0;
  })
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
    return items.some((item) => {
      return (!item);
    });
}

module.exports = { anyAreNegative, includesFalseyValues }
