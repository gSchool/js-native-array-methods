// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: false }
// ]
// Expected Output: true
function allNutritious (items) {
  return items.every(function (food){
    return food.nutritious;
  })
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
  var mapped = items.map(function(item) {
    return typeof item
  })
  var first = mapped[0]
  console.log(first);
  return items.every(function(a) {
    return typeof a === first && a.constructor == items[0].constructor 
  })
}

module.exports = { allNutritious, allOfOneType }
