const stringLength = require('../src/stringLength');

it('string length', () => {
  const testString = 'Lesson';
  expect(stringLength(testString)).toBe(6);
});

it('string length between 1 and 10 - lengh is ZERO', () => {
  const testString = '';
  expect(() => stringLength(testString)).toThrow('length out of range (1-10)');
})

it('string length between 1 and 10 - lengh is greater than 10', () => {
  const testString = 'I like Javascript';
  expect(() => stringLength(testString)).toThrow('length out of range (1-10)');
})