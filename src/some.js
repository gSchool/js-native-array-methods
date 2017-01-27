// Use `.some` in the following methods

// Sample Input: [ 10, 20, 30, 40, -50 ]
// Expected Output: true
function anyAreNegative (numbers) {
var isNeg = numbers.some(function(number){
  return number < 0;
});
return isNeg;
}
// Sample Input: [ 'Once', 'upon', 'a', 'time', '' ]
// Expected Output: true
function includesFalseyValues (items) {
var nope = items.some(function(item){
if(item===null){
  return true;
}
var result =  item == false || isNaN(item);
return result;
});
return nope;
}

module.exports = { anyAreNegative, includesFalseyValues }
