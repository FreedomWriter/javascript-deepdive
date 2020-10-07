/*
REVIEW
------

- When we invoke a function we are given 2 parameters automatically:
    - this keyword
    - arguments keyword

- Arguments is an array like object that has some odd behaviors for looping and iteration
    - because of the arguments object, we can technically not have any parameters defined for a function, pass the function parameters during invocation and grab them in the body of the function using the arguments keyword

- When we define fns and the compiler looks at our code, lexically it determines what variables are available and adds scope chains

Functions are a first class citizen, what does this mean?
1. Functions can be assigned to a variable
2. Functions can be passed as arguments to a function
3. Functions can be returned as values from another function
*/

// you can add properties to functions but WHY WOULD YOU DO THIS???
function woho() {
  console.log("whoohohoho");
}

woho.yell = "aaaahhhhhhhh";

console.log(woho.yell);

// Things to watch out for.

/* ********************************************************************************* */
// INITALIZING IN LOOPS

// DON'T
for (let i = 0; i < 5; i++) {
  // this means every iteration of the loop cause the function to be redeclared
  function a() {
    return "do stuff";
  }
}

//DO
function a() {
  return "do stuff";
}
for (let i = 0; i < 5; i++) {
  a();
}
/* ********************************************************************************* */

// HOF
// A function that takes a function as an argument or a function that returns a function

function letMeLogin() {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return "Access Granted to Me";
}
function letYouLogin() {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return "Access Granted to You";
}

const giveAccessTo = (name) => `Access granted to ${name}`;

function letUserLogin(user) {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}

function letAdminLogin(admin) {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i);
  }
  return giveAccessTo(admin);
}

// refined version includes giveAccessTo from earlier version, as well as authenticate and letLogin
function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letLogin(person, fn = authenticate) {
  if (person.level === "admin") {
    fn(100000000);
  } else if (person.level === "user") {
    console.log(fn(10000000));
  }
  return giveAccessTo(person.name);
}

function sing(person) {
  return "la la lala lalalalal " + person;
}
console.log(letMeLogin());
console.log(letYouLogin());
console.log(letUserLogin("Nosey"));
console.log(letLogin({ name: "Natalie", level: "admin" }));
console.log(letLogin({ name: "Not Natalie", level: "user" }));
console.log(letLogin({ name: "Not Natalie", level: "user" }, sing));
/* ********************************************************************************* */
