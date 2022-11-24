// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
    return numbers.filter(function(number){
        return number % 2 === 1;
    });
}

// Sample Input:
// [
//   { id: 42, name: 'Clojure' },
//   { id: 43, name: 'Haskell' },
//   { id: 44, name: 'Erlang' }
// ], 42

// Expected Output:
// { id: 42, name: 'Clojure' }
function findById (languages, id) {
    let lang = languages.filter(function(language){
        if(!language){
            return null;
        }
        if(language.id === id){
            return {id: language.id, name: language.name};
        } else {
            return null;
        }
    }, id);
    if(lang[0] !== undefined){
        return lang[0];
    } else {
        return null;
    }
}

module.exports = { onlyOdd, findById }
