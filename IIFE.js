//IFFE

/* 
Using this patteren you can place all library code in local scope to avoid naming collisions
IFFE's are function expressions - not delcaration because the engine sees the brackets before seing the function keyword
uses anon function
is immediately invoked
*/

const myIffe = (function () {
  function a() {
    const someVal = "Hello Iffe";
    return console.log(someVal);
  }
  return {
    func: a,
  };
})();

const someVal = "Globally scoped someVal";

console.log(`myIffe: ${myIffe.func()}`);
console.log({ someVal });
