// Use `.map` in the following methods

// Sample Input:
// [
//   { song: 'Phenom', artist: 'Alex Mali' },
//   { song: 'Too Deep', artist: 'dvsn' },
//   { song: 'Firefly', artist: 'Mura Masa' }
// ]
// Expected Output: ['Alex Mali', 'dvsn', 'Mura Masa']
function justArtists (songs) {
  var result = songs.map(artists)
  return result
  function artists(el){
    var artist =  el.artist;
    return artist

  }

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
  var result = candies.map(addProp)
  return result

  function addProp(el){

    //return newObj["name"]=el[0],newObj["price"]=el[1],newObj["quantity"]=el[2]
    var newObj={"name": el[0], "price": el[1], "quantity": el[2]};
    return newObj

  }

}

module.exports = { justArtists, toObject }
