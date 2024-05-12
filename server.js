
const express = require("express");

const app = express();
const port =  4000;

app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Welcome to Node JS Class V1'
    })
})

app.listen(port, () => {
    console.log('app running on port %s', port);
})