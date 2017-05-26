const { assert } = require('chai')
const { onlyOdd, findById } = require('../src/filter')

describe('onlyOdd', function () {
  it('should return only the odd items', function () {
    const data = [11,22,33,44]
    const expected = [11,33]
    const result = onlyOdd(data)

    assert.deepEqual(result, expected)
  })

})

describe('findById', function () {
  it('should return only the object with the given id', function () {
    const data = [
      { id: 42, name: 'Clojure' },
      { id: 43, name: 'Haskell' },
      { id: 44, name: 'Erlang' }
    ]
    const expected = { id: 42, name: 'Clojure' }
    const result = findById(data, 42)

    assert.deepEqual(result, expected)
  })


})
