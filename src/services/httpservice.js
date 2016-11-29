var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6060';

var service = {
  get: function(url) {
    return fetch(baseUrl + url)
    .then(function(resp) {
      return resp.json();
    });
  },
  post: function(url, ingredient) {
    return fetch(baseUrl + url, {
      headers: {
        //'Accept': 'text/plain',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(ingredient)
    }).then(function(resp) {
      return resp;
    });
  }
};

module.exports = service;
