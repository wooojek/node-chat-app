const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Mike';
        const text = 'Elo';
        const message = generateMessage(from, text);

        expect(typeof message.createdAt).toEqual('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Mike';
        const lat = 1;
        const lng = 1;
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        const message = generateLocationMessage(from, lat, lng);

        expect(typeof message.createdAt).toEqual('number');
        expect(message).toMatchObject({from, url});
    });
});