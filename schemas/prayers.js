var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

var prayerSchema = new Schema({ 
    content: String, 
    type: String, 
   // date: Date.now,
    
    }); 
    
var Prayer = mongoose.model('Prayer', prayerSchema); 

// prayerSchema.methods.display = function (){ 
    //var randomprayer = this.content 
    //console.log(greeting); 
    
    //} 
    
//var oneprayer = new Prayer ({
    //oneprayer.save(function (err){ 
    
//Prayer.save(function (err, Prayer){
   //if (err) return console.error(err); 
   //prayer.content(); 
   
  // }); 
   
//Prayer.find({ content: /^for/ }, callback)     
    

    


//module.exports = mongoose.model('Prayer', {
	//content: String, 
	//type: String,

//})