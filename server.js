//  Imports the express library
const express = require('express');
//  Creating the application object
const app = express();

app.get('/drinks', (req, res) => {
    res.send('welcome to the Gitpub App!')
})

app.listen(7000, () => {
    console.log('listening');
})










