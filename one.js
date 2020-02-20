let sumLargestNumbers = function(data) {
  // Put your solution here
  let largest = 0;
  let secondLargest = 0;
  data.forEach(num => {
    if(num > largest) {
      secondLargest = largest;
      largest = num;
    }
  });
  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Expected output
// 11
// 5
// 126
