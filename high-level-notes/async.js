console.log("ASYNCRONOUS JAVASCRIPT");

/* 
A promise is an object that may produce a single value some time in the future.
- either a resolved value, or a reason that it is not resolved

A promise can have 3 states:
1. Fufilled
2. Rejected
3. Pending
*/

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("Error, it broke");
  }
});

promise
  .then((data) => data + "!!!!")
  .then((data2) => console.log(data2))
  .catch((err) => console.log(err));

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "OH, HELLO");
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "STILL HERE?");
});

//waits until all the promises are resolved, returns the values in the order they appear in the array
Promise.all([promise, p2, p3, p4]).then((values) => console.log(values));

// setTimeout(() => {
//   console.log("1", "is the loneliest number");
// }, 0);
// setTimeout(() => {
//   console.log("2", "can be as bad as one");
// }, 10);

// Promise.resolve("hi").then((data) => console.log("2", data));

// console.log("3", "is a crowd");

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);
      })
      .catch((err) => console.log(err.message));
  })
);
