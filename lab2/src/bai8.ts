export function promiseChain(num: number): Promise<string> {
  return Promise.resolve(num)
    .then((n) => n * n)
    .then((n) => n * 2)
    .then((n) => n + 5)
    .then((result) => {
      return `Result: ${result}`;
    });
}
