export const myPromiseBai02 = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});
