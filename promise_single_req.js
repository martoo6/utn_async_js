const request = require('request-promise');

const apiUrl = 'http://localhost:8080/';

const searchLocationUrl = location => ({
  url: `${apiUrl}location/search/`,
  qs: {
    query: location
  },
  json: true
});

request(searchLocationUrl('london')).then(res => {
  console.log(res);
});
