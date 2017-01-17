const { assert } = require('chai')
const { justArtists, toObject } = require('../src/map')

describe('justArtists', function () {
  it('should return only the artists', function () {
    const data = [
      { song: 'Phenom', artist: 'Alex Mali' },
      { song: 'Too Deep', artist: 'dvsn' },
      { song: 'Firefly', artist: 'Mura Masa' }
    ]
    const expected = ['Alex Mali', 'dvsn', 'Mura Masa']
    const result = justArtists(data)

    assert.deepEqual(result, expected)
  })

  it('should return an empty array when the input is empty', function () {
    const data = []
    const expected = []
    const result = justArtists(data)

    assert.deepEqual(result, expected)
  })
})

describe('toObject', function () {
  it('should format the inputted matrix as an array of objects', function () {
    const data = [
      ['Dark Chocolate Crunchies', 4.11, 3],
      ['Peppermint Poppers', 0.88, 1],
      ['Banana Bunches', 2.33, 2]
    ]
    const expected = [
      { name: 'Dark Chocolate Crunchies', price: 4.11, quantity: 3 },
      { name: 'Peppermint Poppers', price: 0.88, quantity: 1 },
      { name: 'Banana Bunches', price: 2.33, quantity: 2 }
    ]
    const result = toObject(data)

    assert.deepEqual(result, expected)
  })

  it('should return an empty array when the input is empty', function () {
    const data = []
    const expected = []
    const result = toObject(data)

    assert.deepEqual(result, expected)
  })
})
