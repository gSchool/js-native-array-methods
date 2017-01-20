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
  return matrix.reduce ( function (total, nextNum) {
      for (var i = 0; i < nextNum.length; i++) {
        total.push(nextNum[i]);
      }
      return total;
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
  if (!numbers.length){
    return {};
  }
  return numbers.reduce (function (myObj, newNum) {
    myObj.home.push(newNum.phone.home);
    myObj.cell.push(newNum.phone.cell);
    return myObj;
  }, {home:[], cell:[] });
}

module.exports = { flatten, consolidate }
