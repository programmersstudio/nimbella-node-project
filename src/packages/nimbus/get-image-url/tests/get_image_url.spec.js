const getImage = require('../index');

describe('get image url test', () => {
    const main = getImage.main;
    test('get image url test', async done => {
        expect(await main({})).toEqual({"body": "Missing filename", "statusCode": 400});
        expect((await main({filename: "newimage"})).statusCode).toEqual(200);
        expect((await main({filename: "newimage"})).statusCode).toEqual(200);
        done();
    });
});
