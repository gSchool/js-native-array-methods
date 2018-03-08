const { assert } = require('chai')
const { anyAreNegative, includesFalseyValues } = require('../src/some')

describe('anyAreNegative', function () {
  it('should return true when any item is negative', function () {
    const data = [-10,0,10,20,30,40,50]
    const result = anyAreNegative(data)

    assert.isTrue(result)
  })

  it('should return false if no items are negative', function () {
    const data = [0,10,20,30,40,50]
    const result = anyAreNegative(data)

    assert.isFalse(result)
  })

  it('should return false when the array is empty', function () {
    const data = []
    const result = anyAreNegative(data)

    assert.isFalse(result)
  })
})

describe('includesFalseyValues', function () {
  it('should return true when any items is falsey', function () {
    const data = [true, false]
    const result = includesFalseyValues(data)

    assert.isTrue(result)
  })

  it('should return false if no items are falsey', function () {
    const data = [true, true]
    const result = includesFalseyValues(data)

    assert.isFalse(result)
  })

  it('should correctly include other types of falsey values', function () {
    const data = [NaN, undefined, null, 0, false, '']
    const result = data.reduce((acc, value) => {
      return acc && includesFalseyValues([true, value])
    }, true)

    assert.isTrue(result)
  })

  it('should return false when the array is empty', function () {
    const data = []
    const result = includesFalseyValues(data)

    assert.isFalse(result)
  })
})
