# Runtime

## Single Threaded

- Only one set of instructions is executing at a time.
- One of the easiest ways to verify that a language is single threaded is that there is only one call stack (and one heap).
- Because JS is single threaded, it is also synchronous

## Problems with Synchronous Code

- With single threaded, synchronous code long running tasks are difficult to deal with.
- That long running task hijacks the call stack and nothing else can happen until it's popped. This means if a function is running, as user wouldn't be able to scroll the page, click anything, or interact with a site until that function executes completely.

## JS Runtime

The runtime provides a Web API
Web API

- applications which can do things like send HTTP requests, listen to DOM events, delay execution using things like setTimeout, can even be used for things like caching or db storage
- comes with the browser
- communicates with the engine

To see the Web API:

- open the browser console
- type window
- hit enter

These things are provided by the browser and not native to JS (things like `fetch`, `setTimeout`, `setInterval`).
The browser uses low level machine languages like C++ (which is not single threaded) to perform those operations in the background.
This means the Web API's are async, allowing js to keep working

- The call stack pushes things that are not native to js and gives it to the browser which uses the Web API to execute the code. Once the Web API is done working, it pushes the data and maybe a callback to the Callback Queue, The event loop gives that callback or to the stack when the stack is empty

The Event Loop only runs when the call stack is empty and the entire JS file has been run through at least once.

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("2");
```

The reason this will print:

```js
// 1
// 3
// 1
```

Is because, not matter the time setTimeout is instantited with, it must be sent to the Web API because it is not native to JS. This means it must be pushed to the Callback Queue, and the Event Loop will only allow it back on the Call Stack when the stack is empty and the entire JS file has been read at least once.
