let counter = 0;

function inception() {
  if (counter > 3) {
    // have to return here
    return "done";
  }

  counter++;
  //if we don't return the recursive call we lose access to our return value in the if statement when it is popped out of the stack
  return inception();
}

// 1. Identify the base case
// 2. Identify the recursive case
// 3. Move towards the base case and return (both from the base case and return the recursive case)

// Write two functions that finds the factorial of any number. One should use recursion, the other should be iterative
let answer;
function findFactorialRecursive(n) {
  if (n == 0) {
    return answer;
  }

  answer = n * (n - 1);

  return findFactorialRecursive(n - 1);
}

function findFactorialIterative(n) {
  for (let i = 0; i === n; ) {
    console.log(n);
  }
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
