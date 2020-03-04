let repeatNumbers = function (data) {
  // Put your solution here
  let result = '';
  for (const array in data) {
    for (let i = 0; i < data[array][1]; i++) {
      result += (data[array][0]);
    }
    if ((data.length - 1) != array) {
      result += ', ';
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
