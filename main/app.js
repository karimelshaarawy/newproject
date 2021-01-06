
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//setting up server
var app = express();
app.use(cookieParser());



//controllers 
const loginController = require('./controllers/loginController');
const signUpController = require('./controllers/signUpController');
const addBookController = require('./controllers/addBookController');
const searchController = require('./controllers/searchController')
const readlistController = require('./controllers/readlistController');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//get requests
app.get('/', function (req, res) {
  res.render('login', { alertDiv: false });
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
app.get('/readlist', readlistController);
app.get('/dune', function (req, res) {
  res.render('dune',{found:false});
});
app.get('/flies', function (req, res) {
  res.render('flies',{found:false});
});
app.get('/grapes', function (req, res) {
  res.render('grapes',{found:false});
});
app.get('/home', function (req, res) {
  res.render('home', { authorized: false });
});
app.get('/leaves', function (req, res) {
  res.render('leaves',{found:false});
});
app.get('/mockingbird', function (req, res) {
  res.render('mockingbird',{found:false});
});
app.get('/sun', function (req, res) {
  res.render('sun',{found:false});
});
app.get('/registration', function (req, res) {
  res.render('registration', { alertDiv: false });
});

//error 404 : when trying to access page that doesn't exist


//post requets
app.post('/addbook', addBookController);
app.post('/', loginController);
app.post('/register', signUpController);
app.post('/search', searchController)

app.use((req, res) => {
  res.send("error 404 page does not exist");
})
if(process.env.PORT){
  app.listen(process.env.PORT,function(){console.log("Server started")});
}else{
  app.listen(3000,function(){console.log("Server started on port 3000")});
}

module.exports = app;

