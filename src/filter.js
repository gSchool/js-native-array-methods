// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
 function decideIfOdd(el){
   var remainder = el%2
  return (remainder !== 0)
 }
  var result = numbers.filter(decideIfOdd)
  console.log(result)
  return result

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
  function langById(el){
    if(el.id === id){
      return el
    }
  }
  var result = languages.filter(langById)[0]
  if(result === undefined){
    return null
  } else{
    return result
  }
  }


module.exports = { onlyOdd, findById }
