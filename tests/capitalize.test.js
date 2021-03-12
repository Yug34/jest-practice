const capitalize = require("../src/capitalize");

it("Capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello")
});

it("Handles empty string input", () => {
    expect(capitalize("")).toBe("");
});

it("Handles inputs other than strings", () => {
   expect(capitalize({})).toBe("Please input a string");
});

it("Handles non alphabetical inputs", () => {
   expect(capitalize("...")).toBe("...");
});