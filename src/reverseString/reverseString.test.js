const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('should reverse a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    it('should handle an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    it('should handle strings with special characters', () => {
        expect(reverseString('hello-world')).toBe('dlrow-olleh');
    });

    it('should handle strings with numbers', () => {
        expect(reverseString('hello2world')).toBe('dlrow2olleh');
    });
});