const printAndReturn = x => {
  console.log(x);
  return x + 1;
};

Promise.resolve(0)
  .then(printAndReturn)
  .then(printAndReturn)
  .then(printAndReturn)
  .then(printAndReturn);
Promise.resolve(10)
  .then(printAndReturn)
  .then(printAndReturn)
  .then(printAndReturn)
  .then(printAndReturn);
Promise.resolve(100)
  .then(printAndReturn)
  .then(printAndReturn)
  .then(printAndReturn)
  .then(printAndReturn);
