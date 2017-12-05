const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () =>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () =>{
        var spy = expect.createSpy();
        spy('safif', 22);
        expect(spy).toHaveBeenCalledWith('safif', 22);
    });

    it('should call saveUser with user object', () => {
        var email = 'esafif637@gmail.com';
        var password = 'safif3110';

        app.handleSignUp(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});