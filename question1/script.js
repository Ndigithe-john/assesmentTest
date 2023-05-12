'use strict';
// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8
const integer1 = Number(prompt('Input your first number'));
const integer2 = Number(prompt('Input your second integer'));

const int_check = function (int1, int2) {
  if (int1 || int2 === 8 || (int1 && int2 === 8)) {
    alert(
      'The intergers provided contains an integer 8 in one or both of them'
    );
    console.log(
      `The integers are ${int1} for first input and ${int2} for second input`
    );
  } else {
    alert('None of the inputs contains an integer 8');
    console.log(`The inputs are ${int1} and ${int2}`);
  }
};
int_check(integer1, integer2);
