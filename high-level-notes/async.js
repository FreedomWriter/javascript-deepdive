// // console.log("ASYNCRONOUS JAVASCRIPT");

// // /*
// // A promise is an object that may produce a single value some time in the future.
// // - either a resolved value, or a reason that it is not resolved

// // A promise can have 3 states:
// // 1. Fufilled
// // 2. Rejected
// // 3. Pending
// // */

/*
Promises made changing the API for async code

added the job-queue or the microstask queue
similiar to the task queue (call back queueu) but is a bit smaller with a higher priority

The engine will check the job queue and empty that, before it checks the task queue
*/

// // const promise = new Promise((resolve, reject) => {
// //   if (true) {
// //     resolve("stuff worked");
// //   } else {
// //     reject("Error, it broke");
// //   }
// // });

// // promise
// //   .then((data) => data + "!!!!")
// //   .then((data2) => console.log(data2))
// //   .catch((err) => console.log(err));

// // const p2 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 100, "HIII");
// // });

// // const p3 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 1000, "OH, HELLO");
// // });

// // const p4 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 3000, "STILL HERE?");
// // });

// // //waits until all the promises are resolved, returns the values in the order they appear in the array
// // // Promise.all([promise, p2, p3, p4]).then((values) => console.log(values));

// // // setTimeout(() => {
// // //   console.log("1", "is the loneliest number");
// // // }, 0);
// // // setTimeout(() => {
// // //   console.log("2", "can be as bad as one");
// // // }, 10);

// // // Promise.resolve("hi").then((data) => console.log("2", data));

// // // console.log("3", "is a crowd");

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// // Promise.all(
// //   urls.map((url) => {
// //     return (
// //       fetch(url)
// //         .then((resp) => resp.json())
// //         .then((res) => {
// //           console.log(res[0]);
// //           console.log(res[1]);
// //           console.log(res[2]);
// //         })
// //         .catch((err) => console.log(err.message))
// //         // finally doesn't usually receive a param
// //         .finally(() =>
// //           console.log("From Finally: What if I were a notification?!!? SO COOL")
// //         )
// //     );
// //   })
// // );

// // /*
// // Async/Await is part of ES8 and built on top of Promises
// // -----------
// // It is liked for it's readability, it's really just syntactic sugar
// // */

// // fetch("https://jsonplaceholder.typicode.com/users").then((resp) => resp.json());
// // //   .then((data) => console.log("promise chaining", data));

// // async function getData() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
// //   const data = await response.json();
// //   console.log("async/await", data);
// //   return data;
// // }

// // // getData();

// // const getAllData = async function () {
// //   try {
// //     const [users, posts, albums] = await Promise.all(
// //       urls.map((url) => {
// //         return fetch(url)
// //           .then((resp) => resp.json())
// //           .catch((err) => err.message);
// //       })
// //     );

// //     console.log({ users });
// //     console.log({ posts });
// //     console.log({ albums });
// //   } catch (err) {
// //     console.log(err + " OOOHHHH NOOOOOS");
// //   }
// // };

// // // getAllData();

// // FOR AWAIT OF
// const getAllDataForOf = async function () {
//   try {
//     const arrayOfPromises = urls.map((url) => fetch(url));
//     for await (let request of arrayOfPromises) {
//       const data = await request.json();
//       console.log(data);
//     }
//   } catch (err) {
//     console.log(err + " OOOHHHH NOOOOOS");
//   }
// };

// getAllDataForOf();
