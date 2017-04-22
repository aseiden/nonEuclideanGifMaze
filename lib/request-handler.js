var express = require('express');

exports.handleOrigin = function(req, res) {
  console.log('THIS IS THE HANDLE ORIGIN HANDLER', req);
  res.send('Yeah yeah yeah');
};