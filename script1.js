var express = require('express');

var app = express.createServer();

var exphbs  = require('express3-handlebars');

var db = require('./db'); 

var mongoose = require('mongoose');   

var Prayer = mongoose.model('Prayer', {
    content: String,
    type : String, 
    dateAdded: Date,
});

var prayer = new Prayer({
    content: String,   //how do I pass these things to actual handlebars? 
    type : String, 
    dateAdded: Date,
    
});


//var prayersSchema = require('./schemas/prayers');
//var Prayer = mongoose.model('Prayer', prayerSchema); 

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'the prayer machine'}); 
  });

app.get('/chooseprayer', function(req, res){
  res.render('chooseprayer.ejs', {title: 'the prayer machine'}); 
  });

app.post('/addprayer', function(req, res){
  res.render('addprayer.ejs', {title: 'the prayer machine'}); 
  });

app.get('/oneprayer', function(req, res) {
  Prayer.find({}, function (err, data) {
      if (err) return console.error(err);
      res.json(data);
      res.render('oneprayer.ejs', {
      title: 'One Prayer',
      //prayers: prayers
  });
});
}); 


// get a person by name
app.get('/chooseprayer', function(req, res) {
  Prayer.findOne({type: req.params.type})
    .sort('-dateAdded')
    .exec(function (err, data) {
      if (err) return console.error(err);
      if (data) {
        res.json(data);
      } else {
        res.send(404);
      }
      res.render('chooseprayer.ejs', {
      title: 'Find Prayer',
      //prayers: prayers
    });
  });
});

app.post('/addPrayer', function(req, res) {
  prayer.content = req.body.Content;
  prayer.type = req.body.Type;
  prayer.dateAdded = req.body.Date;


    prayer.save(function (err) {
      if (err) {
          // handle errors here
          console.log('Error!');
      }
    console.log('Record saved!');
    res.render('addprayer.ejs', {
      title: 'One More',
    }); 

  }); 
 
});

 // save the person


//app.get('/', function(req, res){
  //res.render('prayers', {
  	//users: data.prayers
  //});
//});

app.get('/*', function(req, res) {
  res.status(404).render('error.ejs', {title: 'Error'});
  });

app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);

});


