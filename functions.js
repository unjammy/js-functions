/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(num){
  return num.toString();
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num){
  num++;
  return num;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(num){
  num--;
  return num;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(num1, num2){
  return (num1 + num2);
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract(num1, num2) {
  return (num1 - num2);
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(num1, num2){
  return (num1 * num2);
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide(num1, num2){
  return (num1 / num2);
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square(num){

  // another way to do it
  // return Math.pow(x, 2);
  return (num * num);
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(op, num1, num2){

  /** Alternate Solution
   **
    switch(operator){
      case 'add':
        console.log( "etc" );
        return add(num1, num2);
        break;
      default:
        return 'something';
    }

    *******

    A switch statement does not evaluate based on True or False.
    It evaluates based on parameter matching.

    Switch is preferential for finite numbers of cases because,
    it exhibits faster time complexity.

  */

  if( op === "add"){
    console.log( num1 + " + " + num2 + " = " + (num1+num2) );
    return (num1 + num2);
  }
  if( op === "subtract"){
    console.log( num1 + " - " + num2+ " = " + (num1-num2));
    return (num1 - num2);
  }
  if( op === "multiply"){
    console.log( num1 + " * " + num2 + " = " + (num1*num2));
    return (num1 * num2);
  }
  if( op === "divide"){
    console.log( num1 + " / " + num2+ " = " + (num1/num2));
    return (num1 / num2);
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan(num1, num2){
  if(num1 > num2){
    return true;
  } else {
    return false;
  }
}

/** Alternate Solution
**
*   return num1 > num2;
*
*/

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function isLessThan(num1, num2){
  if(num1 < num2){
    return true;
  } else {
    return false;
  }
}
/** Alternate Solution
**
*   return num1 < num2;
*
*/

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(num1, num2){
  if(num1 === num2){
    return true;
  } else {
    return false;
  }
}

/** Alternate Solution
**
*   return num1 === num2;
*
*/

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(num1, num2){
  if(num1 > num2){
    return num2;
  } else {
    return num1;
  }
}

/** Alternate Solution
**
*   return Math.min(num1, num2);
*
*/

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum(num1, num2){
  if(num1 < num2){
    return num2;
  } else {
    return num1;
  }
}

/** Alternate Solution
**
*   return Math.max(num1, num2);
*
*/

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(num){
  if(num % 2 === 0){
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(num){
  if(num % 2 === 0){
    return false;
  } else {
    return true;
  }
}

/** Alternate Solution
**
*   return !( isEven(num) );
*
*/

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(grade, max){

/** Alternate Solution
**
*   switch(true){
*      case myGrade >= 90:
*        return "A";
*        break;
*      case myGrade >= 80;
*        return "B";
*        break;
*      default:
*        return "F";
*    }
*
*   var letterGrade = "F";
*   if( myGrade >= 90){
*     letterGrade = "A";
*   } else if( myGrade >= 80){
*     return "B";
*   } etc, etc, etc {}
*   return letterGrade;
*/

  var num = (grade / max) * 100;
  console.log(num);

  if(num >= 90){
    return "A";
  } else if(num >= 80) {
    return "B";
  } else if(num >= 70) {
    return "C";
  } else if(num >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

function incrementReviews(stuff){
  //console.log(stuff[reviews]);
  if( stuff.hasOwnProperty('reviews') ){
    stuff.reviews = stuff.reviews + 1;
  } else {
    stuff.reviews = 1;
  }
  return stuff;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(str1, str2){
  return str1 + ' ' + str2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle(rad){
  var area = Math.PI * rad * rad;
  var circumference = Math.PI * 2 * rad;
  return {
    "area": area,
    "circumference": circumference
  };
}