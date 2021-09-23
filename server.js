//  Imports the express library
const express = require('express');
//  Creating the application object
const app = express();
//  Creating a variable to store my drinks data from /models/drinks.js
const drinks = require ("./models/drinks")
//  Creating a drinks route to send a message to the broswer
app.get('/homePage', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
//  Create a get route /drinks that will res.send(drinks), which will display your drinks data as json in the browser
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks} )
})
//  Create a get route /drinks/:id
app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id)
})
//  Set the server to listen at port 7000 
app.listen(8000, () => {
    console.log('listening');
})
