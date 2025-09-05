export function printRepose(success: boolean): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Promise success");
      } else {
        reject("Promise failure");
      }
    }, 1000);
  });
}
