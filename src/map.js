// Use `.map` in the following methods

// Sample Input:
// [
//   { song: 'Phenom', artist: 'Alex Mali' },
//   { song: 'Too Deep', artist: 'dvsn' },
//   { song: 'Firefly', artist: 'Mura Masa' }
// ]
// Expected Output: ['Alex Mali', 'dvsn', 'Mura Masa']
function justArtists (songs) {
  return songs.map(function(currentval, index, songs){
    return songs[index]["artist"];
  })
}

// Sample Input:
// [
//   ['Dark Chocolate Crunchies', 4.11, 3],
//   ['Peppermint Poppers', 0.88, 1],
//   ['Banana Bunches', 2.33, 2]
// ]
// Expected Output:
// [
//   { name: 'Dark Chocolate Crunchies', price: 4.11, quantity: 3 },
//   { name: 'Peppermint Poppers', price: 0.88, quantity: 1 },
//   { name: 'Banana Bunches', price: 2.33, quantity: 2 }
// ]
function toObject (candies) {
  return candies.map(function(currentval, index, candies){
    return {name: candies[index][0], price: candies[index][1], quantity: candies[index][2]}
  })
}

module.exports = { justArtists, toObject }
