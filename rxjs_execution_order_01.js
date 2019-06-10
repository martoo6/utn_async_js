//Must run with --experimental-modules

const rx = require('rxjs');
const op = require('rxjs/operators');

const printAndReturn = x => {
  console.log(x);
  return Promise.resolve(x + 1);
};

rx.from(Promise.resolve(0))
  .pipe(
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn)
  )
  .subscribe();

rx.from(Promise.resolve(10))
  .pipe(
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn)
  )
  .subscribe();

rx.from(Promise.resolve(100))
  .pipe(
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn),
    op.flatMap(printAndReturn)
  )
  .subscribe();
