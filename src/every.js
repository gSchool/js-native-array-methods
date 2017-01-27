// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious(items) {
    return items.every(function(list) {
        return list.nutritious;
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
  var baseType = typeof items[0];
  if (Array.isArray(items[0])){
    baseType = "array";
  }
    return items.every(function(type){
      if (Array.isArray(type)){
        return baseType === "array";
      }
    return typeof type === baseType;
  });
}

module.exports = {
    allNutritious,
    allOfOneType
}
