const analyzeArray = require('./analyzeArray');

test('analyzeArray function', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = {
        average: 3,
        min: 1,
        max: 5,
        length: 5
    };

    expect(analyzeArray(input)).toEqual(expectedOutput);
});