// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  return items.every((element)=>{
    return (element.nutritious===true);
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
  return items.every((element, index, items)=>{
    let type = typeof(items[0]);
    if(type ==="object"){
      return 
    }
    return (type === typeof(element))

  })
}

module.exports = { allNutritious, allOfOneType }
