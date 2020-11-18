
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
 fs.writeFileSync('base.json',x);
  res.render('home');
});
app.post('/register',function(req,res){
  var name =req.body.username;
  var pass=req.body.password;
  const data = fs.readFileSync(path.join('base.json'));
  const users = JSON.parse(data);

  if(databaseContainsUsername(name))
  console.log("koko");
  else{
  var newuser={username:name,password:pass};
  users.array.push(newuser);
  var newusers=JSON.stringify(users);
  fs.writeFileSync('base.json',newusers);
  res.render('home');}
});
app.listen(3000);
module.exports = app;
function databaseContainsUsername(username) {

  const data = fs.readFileSync(path.join('base.json'));
  const users = JSON.parse(data);
  const array=users.array;
  for (const user in array) {
      if (user.username===username)
          return true;
  }
  return false;
}

