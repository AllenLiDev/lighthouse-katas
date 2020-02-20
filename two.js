const conditionalSum = function (values, condition) {
  // Your code here
  let sum = 0;
  if (condition === "even") {
    values.forEach(value => {
      if (value % 2 === 0) {
        sum = sum + value;
      }
    });
  } else if (condition === "odd") {
    values.forEach(value => {
      if ((value - 1) % 2 === 0) {
        sum = sum + value;
      }
    });
  } else {
    return "error condition"
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// Expected output
// 6
// 9
// 144
// 0
