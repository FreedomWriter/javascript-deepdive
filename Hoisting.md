# Hoisting

```js
console.log("1---------");
//var teddy = undefined gets added to memory - variables are partially hoisted
//function sing() {
//  console.log("ohhh la la la");
//} gets added to memory - functions are fully hoisted
console.log(teddy); // prints undefined
console.log(sing()); // prints 'ohhh la la la' (and undefined since the function isn't returning anything)
var teddy = "bear";
function sing() {
  console.log("ohhh la la la");
}
```

if brackets were added to the function, the function would not be fully hoisted because the code would see the brackets first not the function.

var will returned undefined, let and const will throw a reference error

The js engine allococates mememory for the variables and functions for the code before it executes it

The engine isn't actually moving the code up to hoist, it's actually doing the first pass through the code and allocating memory for variables and functions, but it is only looking at the left hand side with variables and not the value assigned to the variable.

That being understood means that function expressions:

```js
var sing2 = function () {
  console.log("I'm a function expression");
};
```

will not be fully hoisted, `sing2` will be hoisted as a variable that exists but is assinged undefined in the creation phase.
