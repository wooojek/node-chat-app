const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Mike';
        const text = 'Elo';
        const result = generateMessage(from, text);

        expect(typeof result.createdAt).toEqual('number');
        expect(result).toMatchObject({from, text});
    });
});