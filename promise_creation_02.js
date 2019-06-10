const fs = require('fs');

const getFileData = () =>
  new Promise((resolve, reject) => {
    fs.readFile('./promise_creation.js', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

getFileData()
  .then(console.log)
  .catch(console.error)
  .then(() => console.log('Finished'));
