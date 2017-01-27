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
  if (matrix.length <1){
    var noAnswer = [];
    return noAnswer;
  }
    var answer = matrix.reduce(function(array1, array2) {
        array1 = array1.concat(array2);
        return array1;
    });
    return answer;
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
function consolidate(numbers) {
  if (numbers.length <1){
    var emptyArray = {};
    return emptyArray;
  }
  var consolidated = numbers.reduce(makeDir,{'home':[],'cell':[]});
  return consolidated;
  function makeDir(accumulator,number,index,array) {
    accumulator.home.push(number.phone.home);
    accumulator.cell.push(number.phone.cell);
     return accumulator;
  }
}
module.exports = {
    flatten,
    consolidate
}
