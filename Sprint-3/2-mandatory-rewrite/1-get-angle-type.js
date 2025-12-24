//function getAngleType(angle) {
  //if (angle === 90) return "Right angle";
  // replace with your completed function from key-implement


function getAngleType(angle) {
  if (angle === 90) return "Right angle";
  if (angle < 90) return "Acute angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  if (angle > 180 && angle < 360) return "Reflex angle";
}

console.log(getAngleType(90));
console.log(getAngleType(45));
console.log(getAngleType(120));
console.log(getAngleType(180));
console.log(getAngleType(270));







// Don't get bogged down in this detail
// Jest uses CommonJS module syntax by default as it's quite old
// We will upgrade our approach to ES6 modules in the next course module, so for now 
// we have just written the CommonJS module.exports syntax for you
module.exports = getAngleType;