const caesar = require("../src/caesar");

it('Works with a key', () => {
    expect(caesar("abc", 4)).toBe("efg");
});

it('Works with punctuation in input string', () => {
    expect(caesar("abc.!#", 4)).toBe("efg.!#");
});


it('Returns same string when key is 0', () => {
    expect(caesar("abc", 0)).toBe("abc");
});

it('Works with a key greater than 26', () => {
    expect(caesar("abc", 30)).toBe("efg");
});

it('Works with a negative key', () => {
    expect(caesar("abc", -1)).toBe("zab");
});

it('Return null when key is not provided', () => {
    expect(caesar("abc")).toBe(null);
});