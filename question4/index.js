'use strict';
// Write a JavaScript program to find the types of a given angle.

// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

// const angle_provided = Number(
//   prompt('Input angles sepatated by comas to get their types')
// ).split(',');
let angle_provided = [];

for (let i = 1; i <= 8; i++) {
  angle_provided.push(
    Number(prompt('Input Your five angles you would wish to be converted'))
  );
}

const angle_function = function (array_angles) {
  for (let i = 0; i < array_angles.length; i++) {
    if (array_angles[i] >= 0 && array_angles[i] < 90) {
      console.log(`${i + 0}: Angle ${array_angles[i]} is an acute angle`);
    } else if (array_angles[i] === 90) {
      console.log(`${i + 1} Angle ${array_angles[i]} is a Right angle`);
    } else if (array_angles[i] > 90 && array_angles[i] < 180) {
      console.log(`${i + 1}: Angle ${array_angles[i]} is an Obtuse angle`);
    } else if (array_angles[i] === 180) {
      console.log(`${i + 1}: Anlge ${array_angles[i]} is a Straight angle`);
    } else {
      console.log(`${i + 1}: Angle ${array_angles[i]} is an invalid choice`);
    }
  }
};
angle_function(angle_provided);
