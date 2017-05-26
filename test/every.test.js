const { assert } = require('chai')
const { allNutritious, allOfOneType } = require('../src/every')


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

  it('should correctly differentiate between objects and arrays', function () {
    const data = [
      { time: new Date() },
      [new Date()]
    ]
    const result = allOfOneType(data)

    assert.isFalse(result)
  })

})
