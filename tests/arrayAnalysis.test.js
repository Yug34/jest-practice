const arrayAnalysis = require("../src/arrayAnalysis");

it('Analyzes array correctly', () => {
    expect(arrayAnalysis([1,2,3,4])).toStrictEqual({
        max: 4,
        min: 1,
        avg: 2.5,
        length: 4
    });
});

it('Handles empty arrays', () => {
    expect(arrayAnalysis([])).toStrictEqual({
        max: 0,
        min: 0,
        avg: 0,
        length: 0
    });
});

it('Handles non-array inputs', () => {
    expect(arrayAnalysis({})).toStrictEqual(null);
});