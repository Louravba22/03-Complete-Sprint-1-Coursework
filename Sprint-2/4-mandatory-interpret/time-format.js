function pad(num) {
  return num.toString().padStart(2, "0");
}

formatTimeDisplay(61);
function formatTimeDisplay(seconds) {
  // (61)
  const remainingSeconds = seconds % 60; // 61 % 60 = 1
  const totalMinutes = (seconds - remainingSeconds) / 60; // (61 - 1) / 60 --> = 60 / 60 = 1
  const remainingMinutes = totalMinutes % 60; //1 % 60 = 1
  const totalHours = (totalMinutes - remainingMinutes) / 60; // (1-1) / 60 --> = 0 / 60 = 0

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`; // = 0 1 1
}

console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> is called 3 times: (pad(totalHours), pad(remainingMinutes) and pad(remainingSeconds)

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> pad(totalHours) --> totalHours = 0 --> num = 0

// c) What is the return value of pad is called for the first time?
// =============> first call is pd(totalHours) --> pad(0) and in .padStart(2,"0")= turns it into two zeros ="00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the last call is pad(remainingSeconds) → pad(1), so the num = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The same answer of the before questions plus: Now we have a string with a single character: ‘1’.
// padStart(2, ‘0’) means: ‘make the string at least 2 characters long, and if it is shorter, pad it with zeros on the left’.
// ‘1’ has 1 character → 1 is missing → a ‘0’ is added at the beginning, so de final result: ‘01’
