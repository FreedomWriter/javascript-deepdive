# Call Stack and Memory Heap

## Call Stack

A region in memory that operates in "first in, last out" mode.
Think of a stack of plates. The last plate placed on the stack is the first one that must be taken off in order to access the next plate in the stack. The bottom plate, though it was the first one placed on the the stack, can't be accessed until the others are removed.

The first thing to go in the call stack is the `Global Execution Context`

- The call stack stores functions and variables as the code executes
- At each entry state of the stack (aka stack frame) allows us to know where we are in the code
- Runs in first in last out

## Memory Heap

The memory heap is used to point to variables, functions, objects, etc that is stored.

- Since every js engine has different implementations, variable allocation to the memory heap is not consistent.
- Simple variables can usually be stored on the stack and objects complex data structures (like objects and arrays) are stored in the memory heap.

## Stack Overflow

Recursion (when a function calls itsself) is one of the most common ways to cause a stack overflow

## Gargbage Collection

JS is a garbage collected langauge. This means when js allocates memory in a function, when that function is finished executing, js automatically frees up the memory that we no longer use.

- Garbage collections uses a "mark and sweep" alogorthim
- References that are needed are "marked" as needed, references that are not needed are "swept" away

## Memory Leaks

Memory leaks are peices of memory that we have used in the past, is not needed any longer, but has not been returned to the pool of free memory.

3 Common Memory Leaks

1. Global Variables
2. Event Listeners (not removing event listeners when you don't need them)
3. Using things like `setInterval()` and reference objects. Those objects are never collected by Garbage collectors because unless we clear the setInterval it will keep running and running

Memory is limited, it and the stack must be managed carefully!!

## Misc
