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
  function concat(accumulator, array, index, collection) {
    return accumulator.concat(array);
  }
  return matrix.reduce(concat, [])
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

  function normalize(dataStructure, numbersObject, index, collection) {
    dataStructure.home = (dataStructure.home || [])
    dataStructure.cell = (dataStructure.cell || [])

    dataStructure['home'].push(numbersObject['phone']['home']);
    dataStructure['cell'].push(numbersObject['phone']['cell']);
    return dataStructure
  }

  return numbers.reduce(normalize, {});
}










module.exports = { flatten, consolidate }

var numbers = [2, 4, 8, 16, 32];

function square(num) {
  console.log(num*num);
}

numbers.forEach(square);
