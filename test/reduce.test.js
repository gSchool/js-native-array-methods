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

  it('should return an empty array when the input is empty', function () {
    const data = []
    const expected = []
    const result = flatten(data)

    assert.deepEqual(result, expected)
  })
})

describe('consolidate', function () {
  it('should format the inputted matrix as an array of objects', function () {
    const data = [
      { phone: { home: '(555) 655-4555', cell: '(333) 655-4555' } },
      { phone: { home: '(555) 455-5555', cell: '(333) 455-5555' } },
      { phone: { home: '(555) 255-5555', cell: '(333) 255-5555' } }
    ]
    const expected = {
      home: [ '(555) 655-4555', '(555) 455-5555', '(555) 255-5555' ],
      cell: [ '(333) 655-4555', '(333) 455-5555', '(333) 255-5555' ]
    }
    const result = consolidate(data)

    assert.deepEqual(result, expected)
  })

  it('should return an empty object when the input is empty', function () {
    const data = []
    const expected = {}
    const result = consolidate(data)

    assert.deepEqual(result, expected)
  })
})
