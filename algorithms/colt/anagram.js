function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  for (let val of str1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for (let val of str2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  //   console.log({ counter1 });
  //   console.log({ counter2 });
  for (let key in counter1) {
    // console.log(`counter1[key], key`, counter1[key], key);
    // console.log(`counter2[key], key`, counter2[key], key);
    // console.log(
    //   `counter2[key], counter2[key]`,
    //   counter1[key],
    //   counter2[key],
    //   key
    // );
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram("", ""));
// console.log(validAnagram("aaz", "zza"));
// console.log(validAnagram("anagram", "nagaram"));
// console.log(validAnagram("awesome", "awesom"));
// console.log(validAnagram("qwerty", "qeywrt"));
// console.log(validAnagram("testtwisttime", "timetwisttest"), "last");

function solution2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      // zero is falsy
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// console.log(solution2("", ""));
// console.log(solution2("aaz", "zza"));
// console.log(solution2("anagram", "nagaram"));
// console.log(solution2("awesome", "awesom"));
// console.log(solution2("qwerty", "qeywrt"));
// console.log(solution2("testtwisttime", "timetwisttest"), "last");
