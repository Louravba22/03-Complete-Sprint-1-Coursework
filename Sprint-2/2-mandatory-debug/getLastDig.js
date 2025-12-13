// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
//ANSWER: The function getLastDigit does not receive any parameters, so it will always return the last digit of the variable 'num', which is 3.

// const num = 103;

//function getLastDigit() {
//   return num.toString().slice(-1);
// }

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
//ANSWER:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Finally, correct the code to fix the problem
// =============> write your new code here:

function getLastDigit(number) {
  return number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
