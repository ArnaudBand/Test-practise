const reverseString = require('../src/reverseString');


it('reverse string 12345', () => {
  const itString = 'hello';
  const expectation = 'olleh';
  expect(reverseString(itString)).toBe(expectation);
});


it('reverse string 98765', () => {
  const itString = 'javasrcit';
  const expectation = 'ticrsavaj';
  expect(reverseString(itString)).toBe(expectation);
});