// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  return numbers.filter(element => element % 2 !== 0)
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
let array = languages.filter(element => {
    console.log(element.id);
    return element.id === id;
  })
  return array[0]|| null;
}

module.exports = { onlyOdd, findById }
