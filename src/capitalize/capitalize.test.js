import capitalize from './capitalize';

// Example test cases for the capitalize function
describe('capitalize', () => {
    it('should capitalize the first letter of a single word', () => {
        expect(capitalize('word')).toBe('Word');
    });

    it('should handle an empty string', () => {
        expect(capitalize('')).toBe('');
    });

    it('should handle strings with special characters', () => {
        expect(capitalize('hello-world')).toBe('Hello-world');
    });

    it('should handle strings with numbers', () => {
        expect(capitalize('hello2world')).toBe('Hello2world');
    });
});