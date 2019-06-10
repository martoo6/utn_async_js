const request = require('request-promise');

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

request(searchLocationUrl('london'))
  .then(res => res[0].woeid)
  .then(locationId => request(getLocationUrl(locationId)))
  .then(console.log);

//REMINDER: COMPARE WITH SCALA !
