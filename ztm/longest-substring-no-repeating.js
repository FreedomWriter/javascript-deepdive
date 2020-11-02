console.log("LONGEST SUBSTRING WITH NO REPEATING CHARACTERS");

/*
Given a string, find the length of the longest substring without repeating characters

STEP ONE - VERIFY THE CONSTRAINTS
---------------------------------

- Is the string contiguous? Yes, look for a substring vs a subsequence
    - contiguous means: the characters are sequential with no breaks in between them

- Does case senstivity matter? No, assume lowercase

STEP TWO - WRITE OUT SOME TEST CASES
------------------------------------
 "abccabb" --> 3
 - Two substrings, both have length of 3
 
 "ccccccc" --> 1

 "" --> 0

 "abcbda" --> 4

STEP THREE - SOLVE WITHOUT CODE
-------------------------------

- iterate through string
- if while cur_char != next_char
    - increment longest string count
    - move second pointer



*/

function findLongestSubstringNoRepeating(str) {
  let longestLength = 0;

  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    // console.log(str[i] === str[j]);
    // console.log("str[i]: ", str[i], " str[j]: ", str[j]);
    if (str[i] === str[j] && j - i > longestLength) {
      longestLength = 1;
    }

    while (str[j] && str[i] !== str[j]) {
      //   console.log(str[i] === str[j]);
      //   console.log("str[i]: ", str[i], " str[j]: ", str[j]);
      //   console.log("i: ", i, " j: ", j, " j-i: ", j - i);

      if (longestLength < j - i) {
        longestLength = j - i;
      }
      j += 1;
    }
  }
  return longestLength;
}

console.log(findLongestSubstringNoRepeating("abccabb"));
console.log(findLongestSubstringNoRepeating("ccccccc"));
console.log(findLongestSubstringNoRepeating("abcbda"));
