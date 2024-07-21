// syntacic sugar

// async-await === Promise
/*
async function wrapper() {
  let usersData = [];

  const usersDataPage1 = await fetch('https://reqres.in/api/users?page=1');
  const usersPage1 = await usersDataPage1.json();

  const usersDataPage2 = await fetch('https://reqres.in/api/users?page=2');
  const usersPage2 = await usersDataPage2.json();

  usersData = usersPage1.data.concat(usersPage2.data);

  console.log(usersData);
}
wrapper();
*/

async function getUsersData() {
  try {
    let usersData = [];

    const usersDataPage1 = await fetch('https://reqres.in/api/users?page=1');
    const { data: usersPage1 } = await usersDataPage1.json();

    const usersDataPage2 = await fetch('https://reqres.in/api/users?page=2');
    const { data: usersPage2 } = await usersDataPage2.json();

    usersData = usersPage1.concat(usersPage2);

    console.log(usersData);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('operation complete');
  }
}

getUsersData();
