/**
 * Use the `reduce` method in combination with the concat method
 * to "flatten" an array of arrays into a single array that has
 * all the elements of the original arrays
 */

let arrays = [[1, 2, 3], [4, 5], [6]];
// // Your code here.
// const flatten = (arr) => {
//   let result = [];
//   arr.reduce((currVal, nextVal) => {
//     result = result.concat(currVal, nextVal).filter((item) => item);
//   });
//   return result;
// };

// console.log(flatten(arrays));

// Books code here.
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// → [1, 2, 3, 4, 5, 6]

// my code refactored
const flatten = (arr) => {
  return arr.reduce((currVal, nextVal) => currVal.concat(nextVal), []);
};

console.log(flatten(arrays));
