console.log("ERROR HANDLING");

/*
the Error constructor has 3 properties:
1. name
2. message
3. stack

types:
Error
SyntaxError
ReferenceError

If nothing is handling (catching) the error, it will block further execution of the program

we can handle errors by using either a try/catch block:

function fail() {
    try{
        console.log("this works")
    } catch(err) {
        console.log(err)
    } finally {
        // no matter what happens in the try/catch block, finally will run
    }
    //anything outside of this block will never run
}

*/

const myError = new Error("woooooow...");

console.log(myError.message);
console.log(myError.name);
console.log(myError.stack);

function a() {
  const b = new Error("whut");
  return b;
}

console.log(a());

// Extending the Error
class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Authentication Error";
    this.favoriteSnack = "Me bish";
  }
}

const aE = new AuthenticationError("woooowowowowoowowoowow");
console.log(aE.favoriteSnack);
