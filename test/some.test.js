const { assert } = require('chai')
const { anyAreNegative, includesFalseyValues } = require('../src/some')

describe('includesFalseyValues', function () {
  it('should return true when any items is falsey', function () {
    const data = [true, false]
    const result = includesFalseyValues(data)

    assert.isTrue(result)
  })

  it('should correctly include other types of falsey values', function () {
    const data = [NaN, undefined, null, 0, false, '']
    const result = data.reduce((acc, value) => {
      return acc && includesFalseyValues([true, value])
    }, true)

    assert.isTrue(result)
  })
  
})
