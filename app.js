//Start
const stringUtils = require('./stringUtils');

console.log(stringUtils.capitalize("serpentine"));

console.log(stringUtils.reverse("red rum"));

console.log(stringUtils.contains("Therese Voerman", "Voerman"));



/* TESTING EDGE CASES */



console.log(stringUtils.capitalize(""));
console.log(stringUtils.reverse(""));
console.log(stringUtils.contains("", "a"));

console.log(stringUtils.capitalize(undefined));