// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
var result = numbers.some(function(el){
     console.log(el)
     if(el < 0){
      return true
    }else{
      return false
    }
   })
   return result
}


// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
  return items.some(function(items){return !items})

}

module.exports = { anyAreNegative, includesFalseyValues }
