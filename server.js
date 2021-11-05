//  Imports the express library
const express = require('express');
//  Creating the application object
const app = express();
//  Creating a variable to store my drinks data from /models/drinks.js
const drinks = require ("./models/drinks")
///////////////////////////////////
// MIDDLEWARE
///////////////////////////////////

// near the top, around other app.use() call
// extended property is a body parser
// Parse Request Bodies if Content-Type Header is: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//  Creating a drinks route to send a message to the broswer
app.get('/homePage', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
//  Create a get route /drinks that will res.send(drinks), which will display your drinks data as json in the browser
app.get('/drinks', (req, res) => {
    // res.send(drinks)
    res.render('drinks_index.ejs', {allDrinks: drinks} )
})
//  Create a get route /drinks/:id
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drink: drinks[req.params.id], title: 'first - index page'});
});
//  Set the server to listen at port 7000 
app.listen(8000, () => {
    console.log('listening');
})
