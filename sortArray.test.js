const testSort = require('./sortArray')

test('Returns an object with sorted array values', () => {expect(testSort([1,7,5,6,12,10,'S','H'])).toStrictEqual({"char":['H', 'S'], "even": [10, 12, 6], "odd":[1, 5, 7] });});