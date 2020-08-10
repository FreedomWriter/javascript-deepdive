function printName() {
  return "Natalie Davis";
}

function findName() {
  return printName();
}

function sayMyName() {
  return findName();
}

// console.log(sayMyName());

/* 
Global Execution context
Adds sayMyName() to execution context
Adds findName() to execution context
adds printName() to execution context
printName returns string "Natalie Davis"
which gets returned to findName
which returns it to sayMyName
global() gets popped off the stack

Global Execution context

gives us two things right off the bat;
1. Global Object - in the browser the global object is `window`, in node the global object is called `global` 
2. `this`

variables, functions, ect get added to the global object, this is called the `creation phase`
When functions are run an new execution context is created - a function execution context
*/
