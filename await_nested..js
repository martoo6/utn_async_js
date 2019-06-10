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

(async () => {
  const res = await searchLocationUrl('london');
  const id = res[0].woeid;
  const location = request(getLocationUrl(locationId));
  console.log(location);
})();

//TODO: ADD EXAMPLES IN SCALA. TALK ABOUT ERRORS AND ERROR HANDLING in ASYNC/AWAIT !!!!
//ADD EXAMPLES WITH ASYNC/AWAIT
