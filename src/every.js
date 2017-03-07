// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  return  items.every(function(item) { return item.nutritious ? true : false })
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
  if(items.length === 0){
    return true;
  } else {
    for (var i = 1; i < items.length; i++) {
      var item2 = items[i];
      return items.every(function(item, item2) {
        var type = typeof item;
          return typeof item2 === type ? true : false})
      }
    }  
}

module.exports = { allNutritious, allOfOneType }
