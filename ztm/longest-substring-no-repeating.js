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

function findLongestSubstringNoRepeating(s) {
  let longestLength = 0;

  if (s.length <= 1) {
    return s.length;
  }

  for (let left = 0; left < s.length; left++) {
    let seenChars = {},
      curLongest = 0;

    for (let right = left; right < s.length; right++) {
      const curChar = s[right];

      if (!seenChars[curChar]) {
        curLongest++;
        seenChars[curChar] = true;
        if (longestLength < curLongest) {
          longestLength = curLongest;
        }
      } else {
        break;
      }
    }
  }
  return longestLength;
}

// console.log(findLongestSubstringNoRepeating("abccabb"));
// console.log(findLongestSubstringNoRepeating("ccccccc"));
// console.log(findLongestSubstringNoRepeating("abcbda"));
// console.log(findLongestSubstringNoRepeating("a"));
// console.log(findLongestSubstringNoRepeating(""));
// console.log(findLongestSubstringNoRepeating("pwwkew"));

function findLongestSubstringNoRepeatingOptimized(s) {
  if (s.length <= 1) return s.length;
  const seenChars = {};
  let left = 0,
    longest = 0;
  for (let right = 0; right < s.length; right++) {
    // const curChar = s[right];
    // const prevSeen = seenChars[s[right]];

    if (seenChars[s[right]] >= left) {
      left = seenChars[s[right]] + 1;
    }
    seenChars[s[right]] = right;
    // adding a 1 because left and right are indexes, so off by 1
    if (longest < right - left + 1) {
      longest = right - left + 1;
    }
  }
  return longest;
}

// console.log(findLongestSubstringNoRepeatingOptimized("abccabb"));
// console.log(findLongestSubstringNoRepeatingOptimized("ccccccc"));
// console.log(findLongestSubstringNoRepeatingOptimized("abcbda"));
// console.log(findLongestSubstringNoRepeatingOptimized("a"));
// console.log(findLongestSubstringNoRepeatingOptimized(""));
console.log(findLongestSubstringNoRepeatingOptimized("pwwkew"));

//USING MAP

function findLongestSubstringNoRepeatingOptimized(s) {
  if (s.length <= 1) return s.length;
  const seenChars = new Map();
  let left = 0,
    longest = 0;
  for (let right = 0; right < s.length; right++) {
    const curChar = s[right];
    const prevSeen = seenChars.get(curChar);

    if (prevSeen >= left) {
      left = prevSeen + 1;
    }
    seenChars.set(curChar, right);

    if (longest < right - left + 1) {
      longest = right - left + 1;
    }
  }
  return longest;
}
