// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
return numbers.filter(function(number) {return number % 2 !== 0});
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
  var result = languages.filter(function(language) {return language.id === id});
  if (languages.length === 0 || result.length === 0) {
   return null;
 }
 return result[0];
}

module.exports = { onlyOdd, findById }

// var result = findById([
//   { id: 42, name: 'Clojure' },
//   { id: 43, name: 'Haskell' },
//   { id: 44, name: 'Erlang' }
// ], 45)
// console.log(result);
