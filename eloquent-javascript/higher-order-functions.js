// // /**
// //  * Use the `reduce` method in combination with the concat method
// //  * to "flatten" an array of arrays into a single array that has
// //  * all the elements of the original arrays
// //  */

// // let arrays = [[1, 2, 3], [4, 5], [6]];
// // // Your code here.
// // const flatten = (arr) => {
// //   let result = [];
// //   arr.reduce((currVal, nextVal) => {
// //     result = result.concat(currVal, nextVal).filter((item) => item);
// //   });
// //   return result;
// // };

// // console.log(flatten(arrays));

// // // Books code here.
// // console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// // → [1, 2, 3, 4, 5, 6]

// // // my code refactored
// // const flatten = (arr) => {
// //   return arr.reduce((currVal, nextVal) => currVal.concat(nextVal), []);
// // };

// // console.log(flatten(arrays));

// /**
//  * Your own loop
//  * Write a higher order function `loop` that provides something like a for loop statement.
//  * It takes a value, a test function, an update function, and a body function. Each iteration,
//  * it first returns the test function on the current loop value and stops if that returns false.
//  * The it calls the body function, giving it the current value. Finally, it calls the update function
//  * to create a new value and starts from the beginning.
//  * When defining the function, you can use a regular loop to do the actual looping.
//  */

// // // Your code here.

// // const loop = (val, test, update, bodyFunc) => {
// //   let currVal = val;
// //   while (currVal) {
// //     if (test(currVal)) {
// //       bodyFunc(currVal);
// //       currVal = update(currVal);
// //     }
// //   }
// // };

// // books code
// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log
// );
// // → 3
// // → 2
// // → 1
