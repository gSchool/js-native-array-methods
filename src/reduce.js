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
  return matrix.reduce((a, b) => a.concat(b)}, [])
}

// Sample_Input =
// [
//   { phone: { home: '(555) 655-4555', cell: '(333) 655-4555' } },
//   { phone: { home: '(555) 455-5555', cell: '(333) 455-5555' } },
//   { phone: { home: '(555) 255-5555', cell: '(333) 255-5555' } }
// ];
// Expected Output
// {
//   home: [ '(555) 655-4555', '(555) 455-5555', '(555) 255-5555' ],
//   cell: [ '(333) 655-4555', '(333) 455-5555', '(333) 255-5555' ]
// }
function consolidate (numbers) {
  return numbers.reduce(function(a, b) {

    a.home ? a["home"].push(b.phone.home) : a.home = [b.phone.home];
    a.cell ? a["cell"].push(b.phone.cell) : a.cell = [b.phone.cell];
    return a
  }, {})
}


module.exports = { flatten, consolidate }
