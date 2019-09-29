//Determine if it's Fahrenheit or Celsius
var readlineSync = require('readline-sync'),
  degreeTypes = ['Celsius', 'Fahrenheit'],
  index = readlineSync.keyInSelect(degreeTypes, 'Are you converting from Celsius or Fahrenheit?');
  var degreeType = degreeTypes[index];

function conversion(degreeType){
  var degrees = Number(readlineSync.question('Enter degrees in ' + degreeType + ': '));
  if (degreeType == 'Celsius') {
    degrees = degrees * 1.8 + 32;
    console.log('It is ' + degrees + ' Fahrenheit!');
  } else if (degreeType == 'Fahrenheit'){
    degrees = (degrees - 32)/1.8;
    console.log('It is ' + degrees + ' Celsius!');
  } else {
    console.log('Sorry, we can not help you with that');
  };
};

if (degreeType) {
  conversion(degreeType);
} else {
  console.log('Sorry, we can not help you with that');
};