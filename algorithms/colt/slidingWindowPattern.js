console.log("SLIDING WINDOW PATTERN");

/*
This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, th window either increases or closes (and a new window is created)

Very usefult for keeping track of a subset of data in an array/string, etc.
*/

/*
First Example

Write a function called maxSubarraySum which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consectuive elements in the array.

*/

function maxSubarraySum(arr, num) {
  let curMax = null;

  return curMax;
}

maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 3, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
