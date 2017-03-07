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
  if (matrix.length === 0)
    return [];
  function compact(list, item) {
      return list.concat(item);
  }
  return matrix.reduce(compact);
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
  if (numbers.length === 0)
    return {};
  var result = {
    home: [],
    cell: []
  };
  function extract(result, item, index, list) {
    result.home.push(item.phone.home);
    result.cell.push(item.phone.cell);
    return result;
  }
  return numbers.reduce(extract, result);
}

module.exports = { flatten, consolidate }
