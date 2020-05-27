# Node.js

Node is a runtime build on Chrome's V8 engine which allows JS to run outside of the browser.

Node is actually written in C++ and can be thought of as node.exe because it is an executable.

To see the node api you can't type `window` because it is outside of the browser.

To see the Node API:

- open the terminal
- type `node` to run node
- type `global`
- hit enter

Node is said to be a serverside platform based on asyc io that is non-blocking
Uses JS outside of the browser but creates an environment known as the runtime which will allow aysnc tasks to be sent to worker threads to do the work and then be sent back, through the callback queue and event loop, onto the stack.
