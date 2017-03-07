// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
  return numbers.filter(function(number) {
    return number % 2 === 1
  })
}

// Sample_Input =
// [
//   { id: 42, name: 'Clojure' },
//   { id: 43, name: 'Haskell' },
//   { id: 44, name: 'Erlang' }
// ], 42

// Expected Output:
// { id: 42, name: 'Clojure' }
function findById (languages, id) {
  if (languages.length < 1) {
    return null
  } else {
      var filteredArray = languages.filter(function(object) {
        return object.id === id
      })
      if (filteredArray.length === 0) {
        return null
      } else {
        return filteredArray[0]
      }
    }
  }



module.exports = { onlyOdd, findById }
