const { assert } = require('chai')
const { flatten, consolidate } = require('../src/reduce')

describe('flatten', function () {
  it('should flatten a list of items', function () {
    const data = [
      [ 10, 20, 30 ],
      [ -10, -4 ],
      [ 0, 10, 100, 1000 ],
      []
    ]
    const expected = [ 10, 20, 30, -10, -4, 0, 10, 100, 1000 ]
    const result = flatten(data)

    assert.deepEqual(result, expected)
  })

})
