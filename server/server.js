const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
       message: "Hello safif testing",
       name: "todo App Aplication"
    });
});

app.get('/users', (req, res) => {
    res.send(
    [
        {
            name: 'safif',
            age: 22,
        },
        {
            name: 'rifa',
            age: 21
        },
        {
            name: 'firman',
            age: 21
        }
]);
});

app.listen(3000, () => {
    console.log("localhost is run");
});

module.exports.app = app;