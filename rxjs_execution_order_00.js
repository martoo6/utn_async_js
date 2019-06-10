//Must run with --experimental-modules

const rx = require('rxjs');
const op = require('rxjs/operators');

const printAndReturn = x => {
  console.log(x);
  return x + 1;
};

rx.from(Promise.resolve(0))
  .pipe(
    op.map(printAndReturn),
    op.map(printAndReturn),
    op.map(printAndReturn),
    op.map(printAndReturn)
  )
  .subscribe();

rx.from(Promise.resolve(10))
  .pipe(
    op.map(printAndReturn),
    op.map(printAndReturn),
    op.map(printAndReturn),
    op.map(printAndReturn)
  )
  .subscribe();

rx.from(Promise.resolve(100))
  .pipe(
    op.map(printAndReturn),
    op.map(printAndReturn),
    op.map(printAndReturn),
    op.map(printAndReturn)
  )
  .subscribe();
