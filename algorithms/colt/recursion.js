console.log("RECURSION");

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

function sumRange(num) {
  if (num === 1) {
    return 1;
  }
  console.log(`num: ${num},  num - 1: ${num - 1}`);
  return num + sumRange(num - 1);
}

console.log(sumRange(3));
