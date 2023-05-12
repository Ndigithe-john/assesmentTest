'use stict';
// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1
const given_array = [10, 20, 30, 40, 50, 50, 70, 90, 110];

let arr2 = [];
arr2.push(given_array[0], given_array[given_array.length - 1]);
console.log(arr2);
