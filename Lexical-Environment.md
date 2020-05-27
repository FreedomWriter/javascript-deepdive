# Lexical Environment

The lexical environment is simply where something is written.

Think of it as a little universe that gets created with each exectution context

Each time we write a function, we create a new lexical environment.

In js our lexical scope (available data + variables where the function was defined) determines our available variables. Not where the function is called (dynamic scope). So a function defined in the global scope but called in the lexical environment of another function will still have access to the global scope, because that's where it was defined.
