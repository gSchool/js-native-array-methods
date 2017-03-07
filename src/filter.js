// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 99 ]
function onlyOdd (numbers) {
  return numbers.filter (function(eles) {
      return eles % 2 !== 0;
  });
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

  var something = languages.filter (function(language) {
      if (language.id === id){
        return language;
      }
  });

  if (languages.length === 0 || something.length === 0) {
    return null;
  }

  return something[0];
}

module.exports = { onlyOdd, findById }
