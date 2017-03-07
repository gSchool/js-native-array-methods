// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
  return numbers.some (function (elements) {
    return elements < 0;
  });
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
  return items.some (function (words) {
    // return (words == false || words == undefined || words === NaN || words == null || words == 0 || words == '');
    return !words;

  });

}

module.exports = { anyAreNegative, includesFalseyValues }
