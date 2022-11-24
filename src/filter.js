// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  return numbers.filter(function(num){
    return num % 2 !== 0 
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
  var y = languages.filter(function(x){
    if(x.id == id){
      return x
    }else{
      return null
    }
  })
  return y[0] == null?null:y[0]
}

module.exports = { onlyOdd, findById }
