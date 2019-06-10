const rp = require('request-promise');

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

//Search each location to get it's id
const locationIdsPromises = locations.map(location => {
  return rp(searchLocationUrl(location)).then(res => res[0].woeid);
});

const locationsPromise = Promise.all(locationIdsPromises)
  .then(locationIds =>
    locationIds.map(locationId => rp(getLocationUrl(locationId)))
  )
  .then(locationPromises => Promise.all(locationPromises));

locationsPromise.then(locations => {
  const humidites = locations.map(location => {
    let localAvg = 0;
    location.consolidated_weather.forEach(
      weather => (localAvg += weather.humidity)
    );
    localAvg /= location.consolidated_weather.length;
    return localAvg;
  });

  let avgHumidity = 0;
  humidites.forEach(humidy => (avgHumidity += humidy));
  avgHumidity /= humidites.length;
  console.log(avgHumidity);
});
