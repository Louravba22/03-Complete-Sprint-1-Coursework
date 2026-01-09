const creditCardValidator = require("./Card-Validator");

test("should return true for a valid credit card number", () => {
  const cardNumber = "3789222568881000";
  expect(creditCardValidator(cardNumber)).toBe(true);
});

test("should return false when the card number contains non-numeric characters", () => {
  const cardNumber = "a92332119c011112";
  expect(creditCardValidator(cardNumber)).toBe(false);
});

test("should return false when all digits are the same", () => {
  const cardNumber = "4444444444444444";
  expect(creditCardValidator(cardNumber)).toBe(false);
});

test("should return false when the last digit is odd", () => {
  const cardNumber = "6666666666666661";
  expect(creditCardValidator(cardNumber)).toBe(false);
});

test("should return false when the sum of the digits is 16 or less", () => {
  const cardNumber = "1111111111111110";
  expect(creditCardValidator(cardNumber)).toBe(false);
});

test("should return true for another valid credit card number", () => {
  const cardNumber = "6666666666661666";
  expect(creditCardValidator(cardNumber)).toBe(true);
});

test("should return false when all digits are zero", () => {
  expect(creditCardValidator("0000000000000000")).toBe(true); //an example of expect true but we receive false
});
