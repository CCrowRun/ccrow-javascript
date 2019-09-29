const readlineSync = require('readline-sync');

const input = Number(readlineSync.question("How many digits of FooBar would you like?: "));
for (let digit = 1; digit <= input; digit++) {
  if (digit % 3 === 0 && digit % 5 === 0) {
    console.log("Foobar");
  } else if (digit % 3 === 0) {
    console.log("Foo")
  } else if (digit % 5 === 0) {
    console.log("Bar");
  } else {
    console.log(digit);
  };
};