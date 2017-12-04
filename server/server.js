const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send("Hello safif testing");
});

app.listen(3000, () => {
    console.log("localhost is run");
});