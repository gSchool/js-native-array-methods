// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
  function isNeg(element) {
    return element<0;
  }
  return numbers.some(isNeg);
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
  var counter = items.length;
  function isFalsey (item){
    if (!item) {
      return true;
    }
    if (!!item) {
      counter--;
    }
    if (counter < 1){
      return false;
    }
  }
  return items.some(isFalsey);
}

module.exports = { anyAreNegative, includesFalseyValues }


var words = [
  'aromatic',
  'energetic',
  'ugly',
  'wry'
];

function vowels(word) {
  if (word.includes('a','e','i','o','u')) {
    return true;
  }
}

console.log(words.some(vowels));
