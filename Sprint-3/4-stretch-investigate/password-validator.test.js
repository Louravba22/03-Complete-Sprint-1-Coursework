/* 
<Password Validation


Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

test("password has at least 5 characters", () => {
  // Arrange
  const password = "L@ur4";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(True);
});

test("password must contain at least one uppercase letter", () => {
  const password = "abcde";
  expect(isValidPassword(password)).toEqual(false);
});

test("password must contain at least one lowercase letter", () => {
  const password = "ABCDE";
  expect(isValidPassword(password)).toEqual(false);
});

test("password must contain at least one number", () => {
  const password = "Abcde";
  expect(isValidPassword(password)).toEqual(false);
});

test("password must contain at least one special character", () => {
  const password = "Abcde1";
  expect(isValidPassword(password)).toEqual(false);
});

console.log(isValidPassword("12345")); //false
console.log(isValidPassword("L*ur4")); //true
console.log(isValidPassword("abcde")); //false
