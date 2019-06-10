const fs = require('fs');

Promise.resolve('TACS 2019')
  .then(console.log)
  .catch(console.error)
  .then(() => console.log('Finished 2019'));
