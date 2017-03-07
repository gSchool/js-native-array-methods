// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  function checkOdd(number) {
    return (number % 2 !== 0);
  }
  return numbers.filter(checkOdd);
}

// Sample Input:
// [
//   { id: 42, name: 'Clojure' },
//   { id: 43, name: 'Haskell' },
//   { id: 44, name: 'Erlang' }
// ], 42

// Expected Output:
// { id: 42, name: 'Clojure' }
function findById (languages, id) {
  if (languages.length === 0 || id === undefined)
    return null;
  function correctId(language) {
    return (language.id === id);
  }
  var correctArray = languages.filter(correctId);
  if (correctArray.length === 0)
    return null;
  else
    return correctArray[0];
}

module.exports = { onlyOdd, findById }
