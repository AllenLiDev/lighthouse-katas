const urlEncode = function (text) {
  // Put your solution here
  // let re = /\s/g
  // return re[Symbol.replace](text, '%20')
  let chars = text.split('');
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === ' ') {
      if (i === 0 || i === chars.length - 1) {
        chars[i] = ''
      } else {
        chars[i] = '%20'
      }
    }
  }
  return chars.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// expected output
// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure
