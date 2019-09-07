// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd (numbers) {
    return numbers.filter(e =>  e%2 != 0);
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
    if((languages.filter(e => e.id === id).length === 0)|| (languages.length === 0)) return null;
    else{
        const myLang =  languages.filter(e => e.id == id);
        return myLang[0];
    }
}

module.exports = { onlyOdd, findById }
