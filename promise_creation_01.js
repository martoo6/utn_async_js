const fs = require('fs');

Promise.reject('Error: TACS 2020, not found')
  .then(console.log)
  .catch(console.error)
  .then(() => console.log('Finished 2020'));
