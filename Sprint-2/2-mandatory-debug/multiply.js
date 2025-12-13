// Predict and explain first...

// =============> write your prediction here
//ANSWER: console.log() only prints, it does not return values.

//function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// When multiply(10, 32) is called inside the template literal, it prints the result (320) to the console, but returns undefined. As a result, the final output will be: "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Output: The result of multiplying 10 and 32 is 320
