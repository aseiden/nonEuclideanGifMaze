var express = require('express');
var app = express();
var handler = require('./lib/request-handler');

app.use(express.static(__dirname + '/client'));

app.get('/origin', handler.handleOrigin);
app.get('/*', handler.handleRoomNav);

module.exports = app;