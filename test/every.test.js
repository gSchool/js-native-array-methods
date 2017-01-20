const { assert } = require('chai')
const { allNutritious, allOfOneType } = require('../src/every')

describe('allNutritious', function () {
  it('should return true when all items are nutritious', function () {
    const data = [{ name: 'Water', nutritious: true }]
    const result = allNutritious(data)

    assert.isTrue(result)
  })

  it('should return false if any items are not nutritious', function () {
    const data = [
      { name: 'Water', nutritious: true },
      { name: 'Garbage', nutritious: false }
    ]
    const result = allNutritious(data)

    assert.isFalse(result)
  })

  it('should return true when the array is empty', function () {
    const data = []
    const result = allNutritious(data)

    assert.isTrue(result)
  })
})

describe('allOfOneType', function () {
  it('should return true when all items are of the same type', function () {
    const data = [10,11,12,0]
    const result = allOfOneType(data)

    assert.isTrue(result)
  })

  it('should return false if any items are not of the same type', function () {
    const data = [
      { time: new Date() },
      'object'
    ]
    const result = allOfOneType(data)

    assert.isFalse(result)
  })

  it('should correctly differentiate between objects and arrays', function () {
    const data = [
      { time: new Date() },
      [new Date()]
    ]
    const result = allOfOneType(data)

    assert.isFalse(result)
  })

  it('should correctly differentiate between objects and arrays', function () {
    const data = [
      { time: new Date() },
      [new Date()]
    ]
    const result = allOfOneType(data)

    assert.isFalse(result)
  })

  it('should return true when the array is empty', function () {
    const data = []
    const result = allOfOneType(data)

    assert.isTrue(result)
  })
})
