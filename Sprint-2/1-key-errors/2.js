// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> ANSWER: in the  definition a function, is not enter values, but parameters.
// num is used, but it is not defined.

//function square(3) {
//   return num * num;}

// =============> write the error message here
//ANSWER: Uncaught SyntaxError: Unexpected number

// =============> explain this error message here
//ANSWER: because in the function definition, we should use parameters, not values.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3)); // should output 9.
