
var express = require('express');
var path = require('path');
var fs=require('fs');
const { json } = require('express');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('login');
});
app.get('/novel',function(req,res){
  res.render('novel');
});
app.get('/fiction',function(req,res){
  res.render('fiction');
});
app.get('/poetry',function(req,res){
  res.render('poetry');
});
app.get('/readlist',function(req,res){
  res.render('readlist');
});
app.get('/dune',function(req,res){
  res.render('dune');
});
app.get('/flies',function(req,res){
  res.render('flies');
});
app.get('/grapes',function(req,res){
  res.render('grapes');
});
app.get('/home',function(req,res){
  res.render('home');
});
app.get('/leaves',function(req,res){
  res.render('leaves');
});
app.get('/mockingbird',function(req,res){
  res.render('mockingbird');
});
app.get('/sun',function(req,res){
  res.render('sun');
});
app.get('/registration',function(req,res){
  res.render('registration');
});
app.post('/',function(req,res){
  var user ={username:req.body.username,password:req.body.password};
  var x=JSON.stringify(user);
 fs.appendFileSync('base.json',x);
  res.render('home');
});
app.listen(3000);

module.exports = app;
console.log();
