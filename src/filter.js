// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  function isOdd(element,index,array) {
    if(element % 2 === 0){
      return false;
    }
    return true;
  }
  return numbers.filter(isOdd);
}

// Sample Input:
// [
//   { id: 42, name: 'Clojure' },
//   { id: 43, name: 'Haskell' },
//   { id: 44, name: 'Erlang' }
// ], 42

// Expected Output:
// { id: 42, name: 'Clojure' }
function findById (languages, id) { // return object with given id
  function filterByID(item) {
  if (item.id == id) {
    return true;
  }
  return false;
}
  var obj = languages.filter(filterByID);
  if (obj.length <= 0) {
    return null;
  }
  var poped = obj.pop();
  return poped;
}

module.exports = { onlyOdd, findById }
