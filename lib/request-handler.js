var express = require('express');

exports.handleOrigin = function(req, res) {
  res.send({
    caption: 'You are at the start of the maze...',
  });
};

exports.handleRoomNav = function(req, res) {
  console.log('THIS IS THE REQ BODY CONTENT', req.url);
  res.send({
    caption: 'You got it!',
  });
};