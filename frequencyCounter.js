/* 
Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays/strings

*/

/* 
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of the values must be the same.

    same([1,2,3],[4,1,9]) 
    same([1,2,3],[4,1,9]) // false
    same([1,2,3],[4,1,9]) //false (must be same frequency)
*/

// Naive solution - O(N^2) (indexOf effectively loops)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // this line asks what is the index of arr1[i] squared in arr2. if arr1[i] squared doesn't exist in arr2, correctIndex will be -1 and our if statement will return false
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // if arr1[i] does exist in arr2, this line removes it from the array, once we hit the end of the array.
    arr2.splice(correctIndex, 1);
  }
  // If correctIndex never returned false, we jump out of the for loop and return true
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 3], [4, 4, 9]));
