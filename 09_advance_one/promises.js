const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task--
  // DB calls, Cryptography, network

  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); // to connect with then()
  }, 1000);
});

//  .then() is directly interacting with resolve
// the function is automatic recived a Argument from above output
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async task 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "vishal.ptru.587@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "Vishal", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
    return response.username
  }catch (error) {
    console.log(error);
  }
}
consumePromiseFive();




// 1st Method

// async function getAllUsers() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//   const data = await response.json()
//   console.log(data);
// }

// getAllUsers()

// 2nd Method

fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})