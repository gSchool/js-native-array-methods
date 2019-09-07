// Use `.every` in the following methods

// Sample Input:
// const mmm =[
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
    let check = false;
   return items.every(e => e.nutritious == true);
}

// Sample Input:
// const mmm = [
//   10,
//   14,
//   "23"
// ]
// Expected Output: false
function allOfOneType (items) {
    result = items.every(e => typeof e === typeof items[0]);
    if(result === false)
         return result;
    else{
        return items.every(e => Array.isArray(e) == Array.isArray(items[0]));
    }

}
module.exports = { allNutritious, allOfOneType }
