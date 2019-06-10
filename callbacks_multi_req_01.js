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

locationIds = [];
//Search each location to get it's id
locations.forEach(location => {
  request(searchLocationUrl(location), (err, res) => {
    locationIds.push(res.body[0].woeid);
    if (locationIds.length == locations.length) {
      //Let's get the humidity for each location
      const humidites = [];
      locationIds.forEach(locationId =>
        request(getLocationUrl(locationId), (err, res) => {
          let localAvg = 0;
          res.body.consolidated_weather.forEach(
            weather => (localAvg += weather.humidity)
          );
          localAvg /= res.body.consolidated_weather.length;
          humidites.push(localAvg);

          if (humidites.length == locations.length) {
            let avgHumidity = 0;
            humidites.forEach(humidy => (avgHumidity += humidy));
            avgHumidity /= humidites.length;
            console.log(avgHumidity);
          }
        })
      );
    }
  });
});
