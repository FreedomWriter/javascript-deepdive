# JavaScript Engine

The js engine is essentially a translator that converts js into something that a computer can understand
There are many js engines (called ECMAScript engines)
Engines are written by programmers - engines are just programs
The first js engine was created by Brendan Wich (who also created JS)

## What happens in the engine? - specfic examples refer to the V8 engine

We give the engine a js file
engine does lexical anylsis which breaks the code into tokens that are formed into an abstract syntax tree (AST)
once in ast form it goes through an interpreter, profiler, and compiler

### Interpreters and Compilers

An interpereter translate and read the files line by line on the fly
A compiler doesn't translate on the fly, it works ahead of time to create a translation of the code we've just written and compliles down to a language that can be understood by our machine
it will pass through the code and try to understand what the code does
it will then write a new program, in a new language
the language that it spits out will create the same results as the interpreted code
it is usually compiled into a lower language like machine code

JavaScript can be run using an interpreter or a compiler

Interpreters are quick to get up and running, but they have some problems. When you are running the same code over and over, things can get really slow, because it will run that code each time, line for line.

A compiler optimizes fir instance, given:

```js
function addNum(num1, num2) {
    return num1 + num2
}

for (let i, i < 1000, i++) {
    addNum(1, 1)
}
```

An interpreter would run `addNum` 1000 times, where a compiler would look at this code, see that the resolved value of `addNum` doesn't change, and replace it with`2`. The loop would still run 1000 times, but addNum would not run each of those 1000 times

JIT compliers give us the best of both worlds

When asked is JavaScript an interpreted language, the answer is "it depends on the implementation"

Try to instatiate your object properties in the same order for (copioer)optimization purposes
Given:

```js
function Animal(x, y) {
    this.name = name;
    this.breen = breen'
}

const obj1 = new Animal("Assata", "Akita");
const obj2 = new Animal("Chomsky", "Chowsky");

//because of something called `hidden classes` instantiating objct values in a diffeerent order will deoptimize the code.

obj1.age = "6 months"
obj.temperment = "loving bully"
obj1.temperment ="sweet worrier"
obj.age = "1.5 years"
```

To avoid the deoptimization either give all properties to the object initially, or add new properties in the same order.
(the `Delete` keyword also causes hidden classes to think that the hidden classes of an object are different)
