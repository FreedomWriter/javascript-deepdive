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

tricky hoisting:

```js
var favoriteFood = "grapes";

var foodThoughts = function () {
  console.log("original fav: " + favoriteFood);

  var favoriteFood = "sushi";

  console.log("new fav: " + favoriteFood);
};

foodThoughts();
```

This is going to print:
original fav: undefined
new fav: sushi

on first pass:

var favoriteFood = undefined
var foodThoughts = undefined

creation phase is done.

execution phase:

favoriteFoods = "grapes"

foodThoughts = function - function is not executed

foodThoughts() gets run

When we run foodThoughts() a new execution context is created, inside of which hoisting happens during the creation phase

var favoriteFood = undefined

creation phase ends
execution phase begins
first console.log returns undefined
second one gets assigned the value of "sushi"

hoisting can make code unpredictable, avoid it when you can.
one way of avoiding it is avoiding the `var` keyword
