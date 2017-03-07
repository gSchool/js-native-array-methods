// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  function isNutritius(food) {
    return food.nutritious === true;
  }
  return items.every(isNutritius);
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false

function allOfOneType (items) {
  function oneType(item, _, collection) {

    var arrayTest = false;
    if (Array.isArray(item)) {
      arrayTest = true;
    }

    for (var i = 0; i < collection.length; i++) {
      if (typeof item !== typeof collection[i]){
        return false;
      }
    }

    if (arrayTest === true) {
      for (var j = 0; j < collection.length; j++) {
        if ((Array.isArray(item))!==(Array.isArray(collection[i]))){
          return false;
        }
      }
    }

    return true;
  }
  return items.every(oneType);
}





module.exports = { allNutritious, allOfOneType }
