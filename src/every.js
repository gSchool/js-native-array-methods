// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  return items.every (function (moreItems) {
      return moreItems.nutritious;
  });
}


// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (arrs) {
  return arrs.every (function (elements) {
        return (typeof arrs[0] === typeof arrs[1] === typeof arrs[2] === typeof arrs[3]);
  })
}

module.exports = { allNutritious, allOfOneType }
