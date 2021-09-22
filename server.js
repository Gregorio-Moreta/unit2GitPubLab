//  Imports the express library
const express = require('express');
//  Creating the application object
const app = express();
//  Creating a variable to store my drinks data from /models/drinks.js
const drinks = require("./models/drinks.js")
//  Creating a drinks route to send a message to the broswer
app.get('/homePage', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
//  Create a get route /drinksthat will res.send(drinks), which will display your drinks data as json in the browser
app.get('/drinks', (req, res) => {
    res.send(drinks)
})
//  Set the server to listen at port 7000 
app.listen(7000, () => {
    console.log('listening');
})










