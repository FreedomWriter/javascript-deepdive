testArr = [1, 2, 3, 4, 5, 6, 7, 15];

function fizzBuzz() {
  answer = [];
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    // console.log(i % 3 === 0);
    // console.log(i % 5 === 0);
    if (i % 5 === 0 && i % 3 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i);
    }
  }
  return answer;
}

// console.log(fizzBuzz());

function fizzBuzz2(arr) {
  answer = [];
  for (let i = 1; i < arr.length; i++) {
    // console.log(i);
    // console.log(i % 3 === 0);
    // console.log(i % 5 === 0);
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
      answer.push("FizzBuzz");
    } else if (arr[i] % 3 === 0) {
      answer.push("Fizz");
    } else if (arr[i] % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// console.log(fizzBuzz2(testArr));
