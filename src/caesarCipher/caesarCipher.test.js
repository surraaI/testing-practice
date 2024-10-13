const caesarCipher = require('./caesarCipher');

describe('Caesar Cipher', () => {
    test('shifts letters by 1', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('shifts letters by 3', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('wraps around from z to a', () => {
        expect(caesarCipher('z', 1)).toBe('a');
    });

    test('maintains case', () => {
        expect(caesarCipher('AbC', 1)).toBe('BcD');
    });

    test('ignores non-alphabetic characters', () => {
        expect(caesarCipher('a!b.c', 1)).toBe('b!c.d');
    });
});