// Predict and explain first...
//  =============> at first sight, there is a error because the variable str is being declared twice in the same scope

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
// let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;

// =============> write your new code here

function capitalise(str1) {
  let result = `${str1[0].toUpperCase()}${str1.slice(1)}`;
  return result;
}
console.log(capitalise("laura")); // Output: "Laura"

//.

