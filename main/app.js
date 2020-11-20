
var express = require('express');
var path = require('path');
var fs = require('fs');
const { json } = require('express');


//setting up server
var app = express();
app.listen(3000);

//controllers 
const loginController = require('./controllers/loginController');
const signUpController = require('./controllers/signUpController');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//get requests
app.get('/', function (req, res) {
  res.render('login');
});
app.get('/novel', function (req, res) {
  res.render('novel');
});
app.get('/fiction', function (req, res) {
  res.render('fiction');
});
app.get('/poetry', function (req, res) {
  res.render('poetry');
});
app.get('/readlist', function (req, res) {
  res.render('readlist');
});
app.get('/dune', function (req, res) {
  res.render('dune');
});
app.get('/flies', function (req, res) {
  res.render('flies');
});
app.get('/grapes', function (req, res) {
  res.render('grapes');
});
app.get('/home', function (req, res) {
  res.render('home', { alert: "false" });
});
app.get('/leaves', function (req, res) {
  res.render('leaves');
});
app.get('/mockingbird', function (req, res) {
  res.render('mockingbird');
});
app.get('/sun', function (req, res) {
  res.render('sun');
});
app.get('/registration', function (req, res) {
  res.render('registration');
});

//error 404 : when trying to access page that doesn't exist
// app.use((req, res) => {
//   res.send("error 404 page does not exist");
// })
//

//post requets

app.post('/', loginController);
app.post('/register', signUpController);
module.exports = app;



