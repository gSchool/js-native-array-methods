// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
  function checkNegative(number) {
    return number < 0;
  }
  return numbers.some(checkNegative);
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
  function checkFalsey(element) {
    var falsey = false;
    if (Number.isNaN(element) ||
        element === false ||
        element === null ||
        element === "" ||
        element === undefined ||
        element === 0)
          falsey = true;
    return falsey;
  }
  return items.some(checkFalsey);
}

module.exports = { anyAreNegative, includesFalseyValues }
