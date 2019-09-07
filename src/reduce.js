// Use `.reduce` in the following methods

// Sample Input:
// const mmm = [
//   [ 10, 20, 30 ],
//   [ -10, -4 ],
//   [ 0, 10, 100, 1000 ],
//   []
// ]
// Expected Output: [ 10, 20, 30, -10, -4, 0, 10, 100, 1000 ]
function flatten (matrix) {
    return matrix.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}

// Sample Input:
// const numbers = [
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
    if(numbers.length === 0) return {};
   return numbers.reduce((out, curr) => {
        if (curr.phone) {
            out.home.push(curr.phone.home);
            out.cell.push(curr.phone.cell);
        }
        return out;
    }, {home:[], cell:[]});
}

module.exports = { flatten, consolidate }
