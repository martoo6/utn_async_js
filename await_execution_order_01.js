const printAndReturn = x => {
  console.log(x);
  return Promise.resolve(x + 1);
};

(async () => {
  const res0 = await Promise.resolve(0);
  const res1 = await printAndReturn(res0);
  const res2 = await printAndReturn(res1);
  const res3 = await printAndReturn(res2);
  const res4 = await printAndReturn(res3);
})();

(async () => {
  const res0 = await Promise.resolve(10);
  const res1 = await printAndReturn(res0);
  const res2 = await printAndReturn(res1);
  const res3 = await printAndReturn(res2);
  const res4 = await printAndReturn(res3);
})();

(async () => {
  const res0 = await Promise.resolve(100);
  const res1 = await printAndReturn(res0);
  const res2 = await printAndReturn(res1);
  const res3 = await printAndReturn(res2);
  const res4 = await printAndReturn(res3);
})();
