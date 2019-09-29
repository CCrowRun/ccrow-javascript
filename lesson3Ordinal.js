const readlineSync = require('readline-sync');

//My Code
const num = Number(readlineSync.question('Enter a number: '));
const lastDigit = num % 10;
const lastPair = num % 100;
var suffix = "";

if (lastDigit === 1 && lastPair != 11) {
  suffix = "st";
} else if (lastDigit === 2 && lastPair != 12) {
  suffix = "nd";
} else if (lastDigit === 3 && lastPair != 13) {
  suffix = "rd";
} else {
  suffix = "th";
};

console.log("That is the " + num + suffix + " number!");

//Bootcamp code
var ordinal = function(digit) {
  var digitNum = Number(digit);
  var lastDigit = digitNum % 10;
  var lastTwoDigits = digitNum % 100;
  if (lastTwoDigits > 10 && lastTwoDigits < 20) {
    return digit + "th";
  } else if (lastDigit === 1) {
    return digit + "st";
  } else if (lastDigit === 2) {
    return digit + "nd";
  } else if (lastDigit === 3) {
    return digit + "rd";
  } else {
    return digit + "th";
  };

}

var input = readlineSync.question("Enter a digit: ");

var value = ordinal(input);
console.log(value);