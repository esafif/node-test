const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    // if(res !== 44){
    //     throw new Error(`expected 44 , but got ${res}`)
    // }
    expect(res).toBe(44).toBeA('number');
});

it('Should square', () => {
    var res = utils.square(20);
    expect(res).toBe(400).toBeA('number');
});

it('should expect some values' , () => {
    //expect({name : "safif"}).toEqual({name: "safif"});
    //expect([2,3,4]).toInclude(3);
    //expect([2,3,4]).toExclude(5);
    // expect({
    //     name: "safif",
    //     age: "22",
    //     location: "Bandung"
    // }).toInclude({
    //     age:23
    // })
    expect({
        name: "safif",
        age: "22",
        location: "Bandung"
    }).toExclude({
        age:23
    })
});

it("should verify first and last name", () =>{
    var user = {location: "Bandung", age: 22};
    var res = utils.setName(user, "safif efendi");

    //expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: 'safif',
        lastName: 'efendi'
    });
});