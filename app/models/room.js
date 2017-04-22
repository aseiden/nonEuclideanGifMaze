var db = require('../config');
var mongoose = require('mongoose');

var roomSchema = mongoose.Schema({
  location: String,
  caption: String,
});

module.exports = mongoose.model('Room', roomSchema);