// * callback
// const { readFile } = require('node:fs');
// readFile('./text.txt', 'utf-8', (err, data) => {
//   if (!!err) return console.error(err);

//   console.log(data);
// });

// * promise
// const { readFile } = require('node:fs/promises');

// readFile('./text.txt', 'utf-8')
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err.message));

// * async-await
// const { readFile } = require('node:fs/promises');

// async function readTextFile() {
//   try {
//     const data = await readFile('./tex.txt', 'utf-8');

//     console.log(data);
//   } catch (error) {
//     console.log('in catch');
//     console.error(error.message);
//   }
// }
// readTextFile();

// *callback

const { readFile, appendFile, access, constants } = require('node:fs');
/*
access('./text.txt', constants.F_OK, (err) => {
  if (!!err) return console.log('text.txt file not exists');

  readFile('./text.txt', 'utf-8', (err, data) => {
    if (!!err) return console.log(err.message);

    access('./second-text.txt', constants.F_OK, (err) => {
      if (!!err) return console.log('second-text.txt file not exists');

      appendFile('./second-text.txt', data, (err) => {
        if (!!err) return console.log(err.message);

        console.log('data appended');
      });
    });
  });
});
*/
const { readFile, appendFile, access, constants } = require('node:fs/promises');

access('./text.txt', constants.F_OK)
  .then(() => access('./second-text.txt', constants.F_OK))
  .then(() => readFile('./text.txt', 'utf-8'))
  .then((data) => appendFile('./second-text.txt', data))
  .then(() => {
    console.log('data appended');
  })
  .catch((err) => {
    console.log(err);
  });

// TODO: Async-Await
