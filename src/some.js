// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
var x = numbers.some(function(el){
    console.log(el)
    if(el < 0){
     return true
   }else{
     return false
   }
  })
  return x
}

// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
return items.some(function(item) {return !item})
}

module.exports = { anyAreNegative, includesFalseyValues }
