const request = require('request');

const apiUrl = 'http://localhost:8080/';

const searchLocationUrl = location => ({
  url: `${apiUrl}location/search/`,
  qs: {
    query: location
  },
  json: true
});

request(searchLocationUrl('london'), function(err, res) {
  console.log(res.body);
});
