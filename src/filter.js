// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  return numbers.filter(function(a){
    return a%2 == 1;
  })
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
  var filtered = languages.filter(function(value, index, array){
    return array[index].id == id;
  })
  if (filtered.length > 0){
    return filtered[0]
  } else{
    return null;
  }
}

module.exports = { onlyOdd, findById }
