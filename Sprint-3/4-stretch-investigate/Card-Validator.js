function creditCardValidator(cardNumber) {
  if (cardNumber.length !== 16) {
    //the card number must have exactly 16 characters
    return false;
  }
  if (!/^\d{16}$/.test(cardNumber)) {
    //ensure every character is a number (0–9)
    return false;
  }

  const firstDigit = cardNumber[0];
  const allSame = cardNumber.split("").every((digit) => digit === firstDigit);
  if (allSame) {
    // the card number must contain at least two different digits
    return false;
  }

  const lastDigit = Number(cardNumber[15]);
  if (lastDigit % 2 !== 0) {
    //the last digit must be even
    return false;
  }

  let sum = 0;

  for (let digit of cardNumber) {
    sum += Number(digit);
  }
  if (sum <= 16) {
    return false;
  } // the sum of all digits must be more than 16
  return true;
}

module.exports = creditCardValidator;
