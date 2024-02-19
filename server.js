// require modules
const express = require('express');
const path = require('path');


// create express app
const app = express();

// define a 'root' route directly on app
app.get('/', function(req, res) {
    // res.send('<h1>Hello Express!</h1>');
    res.redirect('/home');
});

// tell app to listen on port 3000 for HTTP requests from client
app.listen(3000, function() {
    console.log('Listening on port 3000');
});

app.get('/home', function(req, res) {
    res.render('home');
});


// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// reqire the student list 'database'
const studentDb = require('./data/student-db');

app.get('/students', function(req, res) {
    res.render('students/index', {
        students: studentDb.getAll()
    });
});