const instructorWithLongestName = function (instructors) {
  // Put your solution here
  let longestName = [];
  let longestCount = 0;
  instructors.forEach(instructor => {
    if (instructor.name.length > longestCount) {
      longestCount = instructor.name.length;
      longestName = [];
      longestName.push(instructor);
    } else if (instructor.name.length === longestCount) {
      longestName.push(instructor);
    }
  });
  return longestName;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophiliaa", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));


// // expected output
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}
