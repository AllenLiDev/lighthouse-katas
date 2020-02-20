let numberOfVowels = function (data) {
  // Put your solution here
  // if the g flag is not used, only the first complete match and its related capturing groups are returned. In this case, the returned item will have additional properties as described below.
  let re = /[aeiou]/g;
  return data.match(re).length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// expected output
// 3
// 5
// 5
