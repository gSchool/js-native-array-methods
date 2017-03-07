// Use `.every` in the following methods

// Sample Input:
// [
//   { name: 'Carrot', nutritious: true },
//   { name: 'Celery', nutritious: true },
//   { name: 'Candy', nutritious: true }
// ]
// Expected Output: true
function allNutritious (items) {
  return items.every (function (moreItems) {
      return moreItems.nutritious;
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

  //working with Nick Sugar to work through his code step by step

    function oneType(item, _, collection) {

      //creating a seperate forloop for the
       var arrayTest = false;
       if (Array.isArray(item)) {
         arrayTest = true;
       }

       //taking theh current 'item' from the items.every and comparing //it to all parts of 'collection'
       for (var i = 0; i < collection.length; i++) {
         if (typeof item !== typeof collection[i]){
           return false;
         }
       }

       //if the array test above created true, now go through each //elemet of the array and test it against the currently //selected items.every.  CHekcing to see if an item matches. 
       if (arrayTest === true) {
         for (var j = 0; j < collection.length; j++) {
           if ((Array.isArray(item))!==(Array.isArray(collection[j]))){
             return false;
           }
         }
       }

       return true; //if none of the flags returned false, then all //items match
     }
     return items.every(oneType);

}

module.exports = { allNutritious, allOfOneType }
