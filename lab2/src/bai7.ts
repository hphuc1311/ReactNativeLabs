export function simulateTaskBai7(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task done in ${time}ms`);
    }, time);
  });
}
