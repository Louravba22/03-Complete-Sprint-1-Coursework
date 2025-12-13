// Predict and explain first...
//  =============> write your prediction here

//function sum(a, b) {
// return; // is a return empty statement
//a + b;
//}

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// When the sum function is called, it hits the return statement immediately, which does not return any value (undefined). Therefore, the expression `${sum(10, 32)}` evaluates to undefined, resulting in the output: "The sum of 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// Output: The sum of 10 and 32 is 42
