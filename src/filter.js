// Use `.filter` in the following methods

// Sample Input: [ 11, 44, 78, 99 ]
// Expected Output: [ 11, 44 ]
function onlyOdd(numbers) {
    return numbers.filter(number => (number % 2 !== 0))
}

// Sample Input:
// [
//   { id: 42, name: 'Clojure' },
//   { id: 43, name: 'Haskell' },
//   { id: 44, name: 'Erlang' }
// ], 42

// Expected Output:
// { id: 42, name: 'Clojure' }

function findById(languages, id) {

    return languages
        .filter(obj => obj.id === id ? obj : null)
        .shift()

    function null(input) {
        if (!input || obj.id !== id) {
            return null
        }
    }


}



// function findById(languages, id) {
//     return languages
//         .filter(function(item) {
//             if (item.id === id) {
//                 return item
//             } else {
//                 return null;
//             }
//         })
//         .shift()
//
// }
//







module.exports = {
    onlyOdd,
    findById
}
