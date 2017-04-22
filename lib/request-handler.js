var express = require('express');
var Room = require('../app/models/room.js');
var mongoose = require('mongoose');

exports.handleOrigin = function(req, res) {
  res.send({
    caption: 'You are at the start of the maze...',
  });
};

exports.handleRoomNav = function(req, res) {
  Room.findOne({location: req.url.slice(1)}, function(err, room) {
    if (room) {
      res.send({
        caption: room.caption,
        isNewRoom: false,
      });
    } else {
      res.send({
        caption: 'You are in a new room.  Do with it what you will.',
        isNewRoom: true,
      });
    }
  });
};

exports.handleRoomPost = function(req, res) {
  var roomLoc = req.body.location;
  var caption = req.body.caption;

  Room.findOne({location: roomLoc}, function(err, room) {
    if (room) {
      res.redirect('/');
    } else {
      new Room({location: roomLoc, caption: caption}).save(function(err) {
        if (err) {
          console.log(err);
        } else {
          res.send({
            caption: caption,
            isNewRoom: false,
          });
        }
      });
    }
  });
};

exports.handleGifPost = function(req, res) {
  res.send('you found the gif post endpoint');
};