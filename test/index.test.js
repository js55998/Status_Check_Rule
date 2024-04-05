const cal = require("../app/index")
test('Adds 1 + 2 to equal 3', () => {
    expect(cal.add(1, 2)).toBe(3);
});
test('Sub 5 - 3 to equal 2', () => {
    expect(cal.sub(5, 3)).toBe(2);
});
test('Multiply 2*2 to equal 4', () => {
    expect(cal.mul(2, 2)).toBe(4);
});
test('Div 15 / 3 to equal 5', () => {
    expect(cal.div(15, 3)).toBe(5);
});
test('Mod 15 % 3 to equal 0', () => {
    expect(cal.mod(15, 3)).toBe(0);
});
test('Mod 25 % 5 to equal 0', () => {
    expect(cal.mod(25, 5)).toBe(0);
});