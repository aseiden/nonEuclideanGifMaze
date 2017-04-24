var express = require('express');
var Room = require('../app/models/room.js');
var mongoose = require('mongoose');
var axios = require('axios');
var utils = require('./utils.js');

exports.handleOrigin = function(req, res) {
  res.send({
    caption: 'You are at the start of the maze...',
  });
};

exports.handleRoomNav = function(req, res) {
  Room.findOne({location: req.url.slice(1)}, function(err, room) {
    if (room) {
      res.send({
        caption: room.caption || 'There is no caption, add one!',
        gifLink: room.gifLink,
        isNewRoom: !room.caption,
        isNoGif: !room.gifLink,
      });
    } else {
      res.send({
        caption: 'There is no caption, add one!',
        isNewRoom: true,
        isNoGif: true,
      });
    }
  });
};

exports.handleRoomPost = function(req, res) {
  var roomLoc = req.body.location;
  var caption = req.body.caption;

  Room.findOne({location: roomLoc}, function(err, room) {
    if (room) {
      room.caption = caption;
      room.save(function() {
        res.send({
          caption: caption,
          isNewRoom: false,
          isNoGif: false,
        });
      });
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
  var roomLoc = req.body.location;
  var searchString = req.body.searchString;

  utils.getGif(searchString).then(function(response) {
    var randomGifObj = utils.getRandElement(response.data.data);
    var randomGifUrl = randomGifObj.images.downsized_medium.url;

    Room.findOne({location: roomLoc}, function(err, room) {
      if (room) {
        room.gifLink = randomGifUrl;
        room.save(function() {
          res.send({
            gifLink: randomGifUrl,
            isNewRoom: false,
            isNoGif: false,
          });
        });
      } else {
        new Room({location: roomLoc, gifLink: randomGifUrl}).save(function(err) {
          if (err) {
            console.log(err);
          } else {
            res.send({
              gifLink: randomGifUrl,
              isNoGif: false,
            });
          }
        });
      }
    });
  });
};