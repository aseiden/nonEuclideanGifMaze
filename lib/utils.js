var express = require('express');
var axios = require('axios');

exports.getGif = function(searchString) {
  return axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: 'dc6zaTOxFJmzC',
      q: searchString,
      limit: 50,
      rating: 'g'
    }
  });
};

exports.getRandElement = function(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};