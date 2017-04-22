var express = require('express');
var app = express();
var handler = require('./lib/request-handler');
var bodyParser = require('body-parser');
var partials = require('express-partials');

app.use(express.static(__dirname + '/client'));
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/origin', handler.handleOrigin);
app.get('/*', handler.handleRoomNav);
app.post('/*', handler.handleRoomPost);

module.exports = app;