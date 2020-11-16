// console.log("SOME REPS");

// /*
// This pattern involves dividing a data set into smaller chuncks and then repeating a process with a subset of data.

// This pattern can remenously decrease time complexity
// */

// function sameFrequency(num1, num2) {
//   // good luck. Add any arguments you deem necessary.
//   let num1Hash = {};
//   let num2Hash = {};

//   let str1 = num1.toString();
//   let str2 = num2.toString();

//   for (let i = 0; i < str1.length; i++) {
//     let num = parseInt(str1[i]);
//     if (num in num1Hash) {
//       num1Hash[num] += 1;
//     } else {
//       num1Hash[num] = 1;
//     }
//   }

//   for (let i = 0; i < str2.length; i++) {
//     let num = parseInt(str2[i]);
//     if (num in num2Hash) {
//       num2Hash[num] += 1;
//     } else {
//       num2Hash[num] = 1;
//     }
//   }

//   for (let i = 0; i < str1.length; i++) {
//     let num = parseInt(str1[i]);
//     // console.log(num1Hash, num2Hash, num);
//     if (num1Hash[num] !== num2Hash[num]) {
//       return false;
//     }
//   }
//   return true;
// }

// // console.log(sameFrequency(182, 281));
// // console.log(sameFrequency(34, 14));
// // console.log(sameFrequency(3589578, 5879385));
// // console.log(sameFrequency(22, 222));

// function averagePair(arr, target) {
//   // add whatever parameters you deem necessary - good luck!
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let curAvg = (arr[start] + arr[end]) / 2;
//     if (target === curAvg) {
//       return true;
//     }
//     if (curAvg < target) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return false;
// }

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));
