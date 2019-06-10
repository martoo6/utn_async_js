const request = require('request');

const apiUrl = 'http://localhost:8080/';

const searchLocationUrl = location => ({
  url: `${apiUrl}location/search/`,
  qs: {
    query: location
  },
  json: true
});

const getLocationUrl = locationId => ({
  url: `${apiUrl}location/${locationId}/`,
  json: true
});

request(searchLocationUrl('london'), (err, res) => {
  const locationId = res.body[0].woeid;
  request(getLocationUrl(locationId), (err, res) => {
    console.log(res.body);
  });
});
