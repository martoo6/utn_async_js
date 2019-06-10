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

const searchLocations = locations => Promise.all(locations.map(searchLocation));

const searchLocation = async location => {
  const res = await rp(searchLocationUrl(location));
  return res[0].woeid;
};

const getLocations = locationIds => Promise.all(locationIds.map(getLocation));

const getLocation = locationId => rp(getLocationUrl(locationId));

getAvgHumidity = locations => {
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
};

(async () => {
  const locationIds = await searchLocations(locations);
  // console.log(locationIds);
  const locations = await getLocations(locationIds);
  // console.log(locations);
  const humidity = getAvgHumidity(locatoins);
  console.log(humidity);
})();
