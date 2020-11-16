console.log("Binary Search");

function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let middle = Math.floor((start + end) / 2);

    if (el === arr[middle]) {
      return true;
    } else if (el < arr[middle]) {
      end = middle - 1;
    } else if (el > arr[middle]) {
      start = middle + 1;
    }
  }

  return false;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15));
