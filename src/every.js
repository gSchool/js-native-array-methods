// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious(items) {
    return items.every(item => item.nutritious === true)
}

// function allNutritious(items) {
//     return items.every(function(item) {
//         return item.nutritious === true
//     })
// }

// Sample Input:
// [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType(items) {
    return items.every(item => (typeof item === "number"))
}

// function allOfOneType(items) {
//     return items.every(function(item) {
//         return typeof item === "number"
//     })
// }

module.exports = {
    allNutritious,
    allOfOneType
}
