// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
    return items.every(function(item){
        return item.nutritious == true;
    });
}

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
    return items.every(function(item){
        return (typeof item === typeof items[0]) && (Array.isArray(item) === Array.isArray(items[0])) ;
    });
}

module.exports = { allNutritious, allOfOneType }
