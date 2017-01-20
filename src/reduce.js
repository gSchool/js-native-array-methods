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

return matrix.reduce(createOneArray, []);

  function createOneArray(resultArr, arr) {
    return resultArr.concat(arr);
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

  if (Object.keys(numbers).length > 0) {
    return numbers.reduce (accum, {home: [], cell: []});
    function accum (newObj, phoneLine) {
      newObj.cell.push(phoneLine.phone.cell);
      newObj.home.push(phoneLine.phone.home);
      return newObj;
    }
  } else {
    return {};
  }
}

module.exports = {flatten, consolidate}
// var result = consolidate([
//   { phone: { home: '(555) 655-4555', cell: '(333) 655-4555' } },
//   { phone: { home: '(555) 455-5555', cell: '(333) 455-5555' } },
//   { phone: { home: '(555) 255-5555', cell: '(333) 255-5555' } }
// ])
// console.log(result);
