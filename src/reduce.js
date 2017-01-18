// Use `.reduce` in the following methods

// Sample Input:
// [
//   [ 10, 20, 30 ],
//   [ -10, -4 ],
//   [ 0, 10, 100, 1000 ],
//   []
// ]
// Expected Output: [ 10, 20, 30, -10, -4, 0, 10, 100, 1000 ]
function flatten (matrix) {
  if (matrix.length >0){
    return matrix.reduce(function(a, b){return a.concat(b)});
  } else{
    return matrix;
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
function consolidate (number) {
  if (Object.keys(number).length > 0){
  return number.reduce(
    function(acc, num){
    acc.home.push(num.phone.home); acc.cell.push(num.phone.cell);
    return acc
    }, {home: [], cell: []})
  } else {
    return {};
  }
}

module.exports = { flatten, consolidate }
