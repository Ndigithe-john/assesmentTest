'use strict';
// What will be logged to the console from the below expression. explain why.

let sum = 5 + 5 + '5';

console.log(sum);

// The result of the above code is 105;
// explanation
// Executiton of sum happens from left to right and thus the first calculation that is 5+5 is carried out to yield the result being a 10;
// after which the program moves to perform the second calculation which is this case will be 10 +'5'. The + operator triggers javascript
// to do a string coercion and thus the number 10 is converted into a string and then concatenation is performed resulting to the solution being a string of value 105;
