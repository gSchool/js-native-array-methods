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
    return matrix.reduce((flat, matrixEntry) => {
        return flat.concat(matrixEntry);
    }, []);
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
  return numbers.reduce((phoneNumbers, numberEntry) => {
        if(!numberEntry){
            return phoneNumbers;
        }
        if(!phoneNumbers.home){
            phoneNumbers.home = [];
        }
        if(!phoneNumbers.cell){
            phoneNumbers.cell = [];
        }
        phoneNumbers.home.push(numberEntry.phone.home);
        phoneNumbers.cell.push(numberEntry.phone.cell);
        return phoneNumbers;
  }, {});
}

module.exports = { flatten, consolidate }
