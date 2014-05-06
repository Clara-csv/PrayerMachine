var mongoose = require('mongoose');

mongoose.connect('mongodb://csantamaria:frisco457@ds037758.mongolab.com:37758/prayers');

module.exports = mongoose.connection;