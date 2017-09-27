const sum = require('../sum')

test('it works', () => {
  const result = sum(1, 2)

  expect(result).toBe(3)
})
