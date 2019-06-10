const request = require('request');

const apiUrl = 'http://localhost:8080/';

const searchLocationUrl = location => ({
  url: `${apiUrl}location/search/`,
  qs: {
    query: location
  },
  json: true
});

const locations = [
  'london',
  'buenos aires',
  'rome',
  'tokyo',
  'new york',
  'madrid',
  'seoul',
  'moscow'
];

locations.forEach(location => {
  request(searchLocationUrl(location), (err, res) => {
    console.log(res.body);
  });
});
