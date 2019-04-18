const assert = require('assert')
const initials = require('../initials')

describe('Initials', () => {
  it('should return initials with first name', () => {
    assert.strictEqual(initials('John'), 'JO')
  })

  it('should return initials with last name', () => {
    assert.strictEqual(initials('', 'Wick'), 'WI')
  })

  it('should return initials with first and last name', () => {
    assert.strictEqual(initials('John', 'Wick'), 'JW')
  })

  it('should return initials with full name', () => {
    assert.strictEqual(initials('John Wick'), 'JW')
  })
})
