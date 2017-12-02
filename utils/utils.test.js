const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    if(res !== 44){
        throw new Error(`expected 44 , but got ${res}`)
    }
});

it('Should square', () => {
    var res = utils.square(20);
    if(res !== 400){
        throw new Error(`expected 400, but got ${res}`)
    }
});