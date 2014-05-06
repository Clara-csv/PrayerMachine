var express = require('express');

var app = express.createServer();

var prayers = require('./data/prayers').data;

var exphbs  = require('express3-handlebars');
//app.engine('handlebars',
	//exphbs({defaultLayout: 'main'}));
//app.set('view engine', 'handlebars');

var db = require('./db'); 

var PrayersSchema = require('./schemas/prayers');

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'the prayer machine'}); 
  });

app.get('/prayers', function(req, res){
  res.render('prayers.ejs', {
    title: 'One Prayer',
    prayers:prayers
  }); 
}); 

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
  }); 

app.listen(3000); 