const { readFile } = require('node:fs');

// Promisify
function readFilePromise(path, encode) {
  return new Promise((resolve, reject) => {
    readFile(path, encode, (err, data) => {
      if (!!err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise('./text.txt', 'utf-8')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function main() {
  try {
    const data = await readFilePromise('./second-text.txt', 'utf-8');

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
main();
