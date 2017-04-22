var express = require('express');
var Room = require('../app/models/room.js');
var mongoose = require('mongoose');

exports.handleOrigin = function(req, res) {
  res.send({
    caption: 'You are at the start of the maze...',
  });
};

exports.handleRoomNav = function(req, res) {
  console.log(req.url.slice(1));
  Room.findOne({location: req.url.slice(1)}, function(err, room) {
    if (room) {
      // return the room contents
    } else {
      res.send({
        caption: 'You are in a new room.  Do with it what you will.',
        isNewRoom: true,
      });
    }
  });
};

exports.handleRoomPost = function(req, res) {
  console.log(req.body);
  res.send('I got the post');
};