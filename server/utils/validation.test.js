const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        const test = {
            name: 1,
            room: true
        };

        expect(isRealString(test.name)).toBeFalsy();
        expect(isRealString(test.room)).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        const test = {
            name: '    ',
            room: '       '
        };

        expect(isRealString(test.name)).toBeFalsy();
        expect(isRealString(test.room)).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        const test = {
            name: '   Mike',
            room: 'gamers'
        };

        expect(isRealString(test.name)).toBeTruthy();
        expect(isRealString(test.room)).toBeTruthy();
    });
});