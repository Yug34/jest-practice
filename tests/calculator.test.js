const calculator = require("../src/calculator");

it('Adds two numbers correctly', () => {
    expect(calculator.add(2,3)).toBe(5);
});

it('Add handles non numeric input', () => {
    expect(calculator.add("a","24")).toBe(null);
});

it('Subtracts two numbers correctly', () => {
    expect(calculator.sub(2,5)).toBe(-3);
});

it('Sub handles non numeric input', () => {
    expect(calculator.sub("a","24")).toBe(null);
});

it('Multiplies two numbers correctly', () => {
    expect(calculator.mul(6,10)).toBe(60);
});

it('mul handles non numeric input', () => {
    expect(calculator.mul("a","24")).toBe(null);
});

it('Divides two numbers correctly', () => {
   expect(calculator.div(4,2)).toBe(2);
});

it('Div handles non numeric input', () => {
    expect(calculator.div("a","24")).toBe(null);
});

it('Returns null on division by 0', () => {
    expect(calculator.div(4,0)).toBe(null);
});