// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  function isOdd(number) {
    if (number%2 !== 0){
      return true;
    }
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
function findById (languages, searchID) {
  function isID(language) {
    if (language.id === searchID){
      return true;
    }
  }
  var match = languages.filter(isID);
  if (match[0] === undefined){
    return null;
  }else {
    return match[0];
  }
}

module.exports = { onlyOdd, findById }






var numbers = [ 12, 10, 6, 5, 3, 2, 1 ]

function div3(number) {
  return number%3 === 0

}

console.log(numbers.filter(div3));
