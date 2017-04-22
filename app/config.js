var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/negm');

var db = mongoose.connection;

module.exports.connection = db;