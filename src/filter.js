// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
/*
}*/
function onlyOdd (numbers) {
return numbers.filter(isOdd)
}

function isOdd(item){
  if(item % 2 === 0){
    return false
  }else{
    return true
  }
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
  var result = languages.filter(isId)[0];
  function isId(item){
    if(item.id === id){
       return item;
    }
  }
  if(result === undefined){
   return null
 }else{
   return result
 }
}




module.exports = { onlyOdd, findById }
