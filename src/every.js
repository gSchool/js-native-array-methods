// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  function nutri(element,index,array) {
    return element['nutritious'];
  }
  return items.every(nutri);
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
  function same(element,index,array) {
    var first = array[0];
    if (Array.isArray(element) && Array.isArray(first)) {
      return true;
    }

    if (!Array.isArray(element) && !Array.isArray(first)) {
      return typeof element === typeof first;
    }
    return false; 
  }
  return items.every(same);
}

module.exports = { allNutritious, allOfOneType }
