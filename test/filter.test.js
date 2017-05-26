const { assert } = require('chai')
const { onlyOdd, findById } = require('../src/filter')

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
