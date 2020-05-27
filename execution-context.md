# Global Execution context

Global Exection context is given to us by the browser when code is read.

Gives us two things right off the bat:

1. Global Object - in the browser the global object is `window`, in node the global object is called `global`
2. `this`

variables, functions, ect get added to the global object, this is called the `creation phase`
When functions are run an new execution context is created - a function execution context
