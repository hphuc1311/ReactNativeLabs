export function randomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100) + 1;

    if (random == null) {
      reject(new Error("Random number too low!"));
    } else {
      resolve(random);
    }
  });
}
