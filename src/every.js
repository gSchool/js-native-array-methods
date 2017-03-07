// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  return items.every(item => item.nutritious)
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
  return items.every(function(a) {return ((typeof a === typeof items[0]) && a.constructor === items[0].constructor)})
}

module.exports = { allNutritious, allOfOneType }
