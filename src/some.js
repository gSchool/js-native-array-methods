// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative(numbers) {
 return numbers.some(isnegative);

 function isnegative(element, index, array) {
  return element < 0;
 }
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues(items) {
 return items.some(falsy);

 function falsy(element, index, array) {
  if (!element) {
   return true;
  }
  return false;
 }
}

module.exports = {
 anyAreNegative,
 includesFalseyValues
}
