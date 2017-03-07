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
 return matrix.reduce(function (previous, next) {
  return previous.concat(next);
 }, []);
}

// return newArr;
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
// } push currentElement.phone.cell to accumulator.cell
//currentElement.phone.home to accumulator.home
//return accumulator

function consolidate(numbers) {
 var newArr = {
  home: [],
  cell: []
 };
 return numbers.reduce(function (acc, currentVal, currentIndex, array) {
  newArr.home.push(currentVal.phone.home);
  newArr.cell.push(currentVal.phone.cell);
  return newArr;
 }, {});

}

module.exports = {
 flatten,
 consolidate
}
