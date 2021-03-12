const reverseString = require("../src/reverseString");

it("", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

it("Handles empty string input", () => {
    expect(reverseString("")).toBe("");
});

it("Handles inputs other than strings", () => {
    expect(reverseString({})).toBe("Please input a string");
});