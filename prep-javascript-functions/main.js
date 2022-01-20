function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

var sumResult = addTwoNumbers(6, 6);
console.log('sum', sumResult);

function convertHoursToMinutes(x) { return 2 * 60; }
var minutes = convertHoursToMinutes(2);
console.log('Minutes', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + 'World!';
}
var nameFull = getGreeting(1);
console.log(nameFull);

function addAndMultiplyBy5(Num1, Num2) { return (10 + 5) * 5; }
var number = addAndMultiplyBy5(2);
console.log(number);

function multiplyAndDivideBy5(Num1, Num2) { return (35 * 10) / 5; }
var numberDivide = multiplyAndDivideBy5(2);
console.log(numberDivide);

function subtractTwoNumbers(Num1, Num2) { return 22 - 7; }
var numberSubtracted = subtractTwoNumbers(2);
console.log(numberSubtracted);

function getCircleCircumference(radius) { return 2 * 3.14 * 5; }
var nuberCircumference = getCircleCircumference(1);
console.log(nuberCircumference);

function getFullName(firstName, lastName) { return 'Juan' + ' ' + 'Ramirez'; }
var fullName = getFullName(2);
console.log(fullName);

function cube(number) { return 5 * 5 * 5; }
var numberCube = cube(1);
console.log(numberCube);
