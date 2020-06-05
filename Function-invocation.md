# Function Invocation

## Execution context:

`this` `arguments`

## Misc

You can console.log(arguments) in a function and it will returns somethign that looks like an object that contains the keys being passed in a function.

However, we want to avoid using the `arguments` keyword as it slows down the engine optimization.

One way to iterate over arguments being pased to a function is to use `Array.from`

```js
function someFunc(arg1, arg2) {
  Array.from(arguments);
}
```

OR, you can use the Rest operator:

```js
function someFunc(...args) {
  return `${args[0]} is the first argument, ${args[1]}  is the second argument.`;
}
```
