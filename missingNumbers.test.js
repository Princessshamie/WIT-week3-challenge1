const missing = require('./missingNumbers');

test('return missing numbers from Numbers when  the index of count is not found', () => {
    expect(missing([3,4,6,7,8])).toStrictEqual([1,2,5]);
});
