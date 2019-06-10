const request = require('request-promise');

const apiUrl = 'http://localhost:8080/';

const searchLocationUrl = location => ({
  url: `${apiUrl}location/search/`,
  qs: {
    query: location
  },
  json: true
});

(async () => {
  const res = await searchLocationUrl('london');
  console.log(res);
})();
