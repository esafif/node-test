const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return hello safif', (done) =>{
    request(app)
    .get('/')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            message: "Hello safif testing",
            name: "todo App Aplication"
        })
    })
    .end(done);
});

it('should return my users object', (done) =>{
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            name: 'safif',
            age: 22
        });
    })
    .end(done);
});