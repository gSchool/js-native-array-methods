// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  return items.every(function(a){return (a.nutritious)})
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
  return items.every(function(a){return (typeof a === "number")})
}

module.exports = { allNutritious, allOfOneType }
