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

// //minSubArrayLen Solution
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//     // move the window to right
//     if (total < sum && end < nums.length) {
//       total += nums[end];
//       end++;
//     }
//     // if current window adds up to at least the sum given then
//     // we can shrink the window
//     else if (total >= sum) {
//       minLen = Math.min(minLen, end - start);
//       total -= nums[start];
//       start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }
// //findLongestSubstring Solution
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }
