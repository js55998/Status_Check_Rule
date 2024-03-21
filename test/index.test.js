const add = require('../app/index')

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 9 to equal 14', () => {
    expect(add(5, 9)).toBe(14);
});

test('adds 5 + 10 to equal 15', () => {
    expect(add(5, 10)).toBe(15);
});