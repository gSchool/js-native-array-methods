// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  function isNutritious(item) {
    return (item.nutritious === true);
  }
  return items.every(isNutritious);
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
  var firstType = typeof items[0];
  function checkType(item) {
    if ((Array.isArray(item) && !Array.isArray(firstType)) ||
        !Array.isArray(item) &&  Array.isArray(firstType))
      return false;
    else
      return (typeof item === firstType);
  }
  return items.every(checkType);
}

module.exports = { allNutritious, allOfOneType }
