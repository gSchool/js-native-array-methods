// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 1;
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
function findById(languages, id) {
    var answer =  languages.filter(function(myId) {
          return myId.id === id;
})[0];
if (!answer){
  return null;
}
return answer;
}

module.exports = {
    onlyOdd,
    findById
}
