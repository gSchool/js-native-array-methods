// Use `.reduce` in the following methods

// Sample Input:
// [
//   [ 10, 20, 30 ],
//   [ -10, -4 ],
//   [ 0, 10, 100, 1000 ],
//   []
// ]
// Expected Output: [ 10, 20, 30, -10, -4, 0, 10, 100, 1000 ]
function flatten(matrix) {
  if(matrix.length === 0){
      var arr = []
      return arr;
    }else{
  var result = matrix.reduce(conCat)
  return result;

function conCat(el,el2){
      var newArray = el.concat(el2)
      return newArray;
   }
 }
}

// Sample Input:
// [
//   { phone: { home: '(555) 655-4555', cell: '(333) 655-4555' } },
//   { phone: { home: '(555) 455-5555', cell: '(333) 455-5555' } },
//   { phone: { home: '(555) 255-5555', cell: '(333) 255-5555' } }
// ]
// Expected Output:
// {
//   home: [ '(555) 655-4555', '(555) 455-5555', '(555) 255-5555' ],
//   cell: [ '(333) 655-4555', '(333) 455-5555', '(333) 255-5555' ]
// }
function consolidate (numbers) {
  var newObj = {},
  cellArr = [],
  homeArr = [];
  if(numbers.length === 0){
      return newObj;
    }else{
      var valHome = numbers.reduce(function(sum,numbers) {
   homeArr.push(numbers.phone.home)
   },0)
     var valCell = numbers.reduce(function(sum,numbers) {
     cellArr.push(numbers.phone.cell)
    },0)
    newObj.home = homeArr
    newObj.cell = cellArr
    return newObj
  }
}


module.exports = { flatten, consolidate }
