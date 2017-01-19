// Use `.map` in the following methods

// Sample Input:
// [
//   { song: 'Phenom', artist: 'Alex Mali' },
//   { song: 'Too Deep', artist: 'dvsn' },
//   { song: 'Firefly', artist: 'Mura Masa' }
// ]
// Expected Output: ['Alex Mali', 'dvsn', 'Mura Masa']
function justArtists (songs) {
  function artistName(song) {
    return song.artist;
  }
  return songs.map(artistName);
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
  function candyObject(candy) {
    return {'name': candy[0], 'price': candy[1], 'quantity': candy[2]};
  }
  return candies.map(candyObject);
}

module.exports = { justArtists, toObject }
