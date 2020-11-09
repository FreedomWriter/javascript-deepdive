// console.log("SLIDING WINDOW PATTERN");

// /*
// This pattern involves creating a window which can either be an array or number from one position to another.

// Depending on a certain condition, th window either increases or closes (and a new window is created)

// Very usefult for keeping track of a subset of data in an array/string, etc.
// */

// /*
// First Example

// Write a function called maxSubarraySum which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consectuive elements in the array.

// */

// function maxSubarraySumMyFirstPass(arr, num) {
//   let curMax = null;

//   for (let i = 0; i < arr.length; i++) {
//     let pointer = i;
//     let tempMax = 0;
//     while (pointer - i < num) {
//       // console.log({ pointer }, { i }, { num });
//       tempMax += arr[pointer];
//       pointer++;
//       if (tempMax > curMax) {
//         curMax = tempMax;
//       }
//     }
//   }

//   return curMax;
// }

// console.log(maxSubarraySumMyFirstPass([1, 2, 3, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySumMyFirstPass([1, 2, 3, 2, 8, 1, 5], 4)); // 16
// console.log(maxSubarraySumMyFirstPass([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySumMyFirstPass([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySumMyFirstPass([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

// function maxSubarraySumTrueSlidingWindow(arr, num) {
//   let maxSum = null;
//   let tempSum = 0;
//   // edge case to exit early if no solution is possible
//   if (arr.length < num) return null;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;

//   // loop starting at num lets us ignore the elements that we have already looked at
//   for (let i = num; i < arr.length; i++) {
//     // subtract the first element in the sliding window, add the next element to it.
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// console.log(maxSubarraySumTrueSlidingWindow([1, 2, 3, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySumTrueSlidingWindow([1, 2, 3, 2, 8, 1, 5], 4)); // 16
// console.log(maxSubarraySumTrueSlidingWindow([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySumTrueSlidingWindow([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySumTrueSlidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
