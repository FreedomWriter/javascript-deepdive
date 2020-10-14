// console.log("COMPOSITION VS INHERITANCE");

/*
COMPOSITION
---------------------------
code is structured around what it has
or what it does to data
focused on what it's abilities are and what it does
*/

/*
INHERITANCE
----------------------

code is structured around what it is
has data as well as methods

ex:
Character is going to have these properties and methods
Elf is going to have these properties and methods
Ogre is going to have these properties and methods

suppose we need to update Character to include a sleep() method
this creates a TIGHT COUPLING problem.
 - coupling is the opposite of reusable, composable code
 - being able to change the code in one place and it having a rippling effect

we also see FRAGILE BASE CLASS PROBLEM
- changing the super class could break children

heirarchy problems can also arise

I just want a banana - wind up with the whole jungle

*/
