const capitalize = require('../src/capitalize');

it('Capitalize the first string', () => {
    const string_1 = 'good morning';
    const string_2 = 'Good morning';
    expect(capitalize(string_1)).toBe(string_2)
})