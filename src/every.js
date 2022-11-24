// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious(items) {
  return items.every(function (x) {
    return x['nutritious']
  });
}
// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType(items) {
  return items.every(function (x, index, array) {
    var y = typeof (x) === typeof (array[0]);
    if (y) {
      if (array[0].length === undefined) {
        if (x.length !== undefined) {
          y = false
        }
      } else {
        if (x.length === undefined) {
          y = false
        }
      }
    }
    return y
  })
}

module.exports = { allNutritious, allOfOneType }
