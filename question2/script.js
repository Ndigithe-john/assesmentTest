'use strict';
// Write a JavaScript program to convert a given number into hours and minutes.
let input_number = Number(
  prompt('Input a number to be converted into hours and minutes')
);
const function_convert = function (num) {
  let hours = Math.trunc(num / 60);
  let minutes = num % 60;
  alert('Successfully converted you can check your results in the console');
  console.log(
    `You have ${hours} hours and ${minutes} minutes in your input conversion`
  );
};
function_convert(input_number);
