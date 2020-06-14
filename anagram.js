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

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("testtwisttime", "timetwisttest"));
