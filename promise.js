// * Promise stage
// Pending - Settled(Fulfilled - Rejected)

// * Create Promise
/*
const ride = new Promise((resolve, reject) => {
  const driver = true;
  if (driver) {
    resolve('ride is here.');
  } else {
    reject('your ride rejected');
  }
});
*/

// * Consume Promise
/*
ride
  .then((result) => {
    console.log('in then');
    console.log(result);
  })
  .catch((err) => {
    console.log('in catch');
    console.log(err);
  });
*/

// * function returns Promise
/*
// -Create Promise
function ride(isDriverOk) {
  return new Promise((resolve, reject) => {
    if (isDriverOk) {
      resolve('driver is here');
    } else {
      reject('driver rejected your ride');
    }
  });
}

// -Consume Promise
ride(true)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

ride(false)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
*/

// * Example
let usersData = [];
// Promise Hell
/*
fetch('https://reqres.in/api/users?page=1')
  .then((data) => {
    const response = data.json(); // Response Object

    response
      .then((responseData) => {
        usersData = responseData.data;

        fetch('https://reqres.in/api/users?page=2')
          .then((data) => {
            const responseJson = data.json();

            responseJson
              .then((users) => {
                usersData = usersData.concat(users.data);

                console.log(usersData);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
*/
/*
fetch('https://reqres.in/api/users?page=1')
  .then((userDataPage1) => {
    return userDataPage1.jon();
  })
  .then((usersPage1) => {
    usersData = usersPage1.data;

    return fetch('https://reqres.in/api/users?page=2');
  })
  .then((usersDataPage2) => {
    return usersDataPage2.json();
  })
  .then((usersPage2) => {
    usersData = usersData.concat(usersPage2.data);

    console.log(usersData);
  })
  .catch((err) => {
    console.log('in catch');
    console.log(err);
  })
  .finally(() => {
    console.log('operation complete');
  });
*/
