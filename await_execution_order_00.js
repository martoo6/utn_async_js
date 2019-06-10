const printAndReturn = x => {
  console.log(x);
  return x + 1;
};

(async () => {
  const res0 = await Promise.resolve(0);
  const res1 = printAndReturn(res0);
  const res2 = printAndReturn(res1);
  const res3 = printAndReturn(res2);
  const res4 = printAndReturn(res3);
})();

(async () => {
  const res0 = await Promise.resolve(10);
  const res1 = printAndReturn(res0);
  const res2 = printAndReturn(res1);
  const res3 = printAndReturn(res2);
  const res4 = printAndReturn(res3);
})();

(async () => {
  const res0 = await Promise.resolve(100);
  const res1 = printAndReturn(res0);
  const res2 = printAndReturn(res1);
  const res3 = printAndReturn(res2);
  const res4 = printAndReturn(res3);
})();
