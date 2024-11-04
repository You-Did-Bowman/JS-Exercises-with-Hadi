// ----------------------------- TASK 1 -----------------------------
/* 
POWER CALCULATOR (Very Easy)

Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300
circuitPower(110, 3) ➞ 330
circuitPower(480, 20) ➞ 9600
*/
const calcPower = (num1, num2) => {
  return num1 * num2;
};

let resultTask1 = calcPower(230, 10);
console.log(resultTask1); // 2300

resultTask1 = calcPower(110, 3);
console.log(resultTask1); // 330

resultTask1 = calcPower(480, 20);
console.log(resultTask1); // 9600

// ----------------------------- TASK 2 -----------------------------
/* 
RETURN THE REMAINDER FROM TWO NUMBERS (Very Easy)

There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1
remainder(3, 4) ➞ 3
remainder(-9, 45) ➞ -9
remainder(5, 5) ➞ 0
*/
const remainder = (num1, num2) => {
  return num1 % num2;
};

let resultTask2 = remainder(1, 3);
console.log(resultTask2); // 1

resultTask2 = remainder(3, 4);
console.log(resultTask2); // 3

resultTask2 = remainder(-9, 45);
console.log(resultTask2); // -9

resultTask2 = remainder(5, 5);
console.log(resultTask2); // 0

// ----------------------------- TASK 3 -----------------------------
/* 
CONVERT MINUTES INTO SECONDS (Very Easy)

Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300
convert(3) ➞ 180
convert(2) ➞ 120
*/
const convert = (minute) => {
  return minute * 60;
};

let resultTask3 = convert(5);
console.log(resultTask3); // 300

resultTask3 = convert(3);
console.log(resultTask3); // 180

resultTask3 = convert(2);
console.log(resultTask3); // 120

// ----------------------------- TASK 4 -----------------------------
/* 
RETURN THE NEXT NUMBER FROM THE INTEGER PASSED (Very Easy)

Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1
addition(9) ➞ 10
addition(-3) ➞ -2
*/
const addtion = (num) => {
  return num + 1; // Why num++ doesn't work? Ô.o
};

let resultTask4 = addtion(0);
console.log(resultTask4); // 1

resultTask4 = addtion(9);
console.log(resultTask4); // 10

resultTask4 = addtion(-3);
console.log(resultTask4); // -2

// ----------------------------- TASK 5 -----------------------------
/* 
AREA OF A TRIANGLE (Very Easy)

Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3
triArea(7, 4) ➞ 14
triArea(10, 10) ➞ 50
*/
const triArea = (base, height) => {
  return (base * height) / 2;
};

let resultTask5 = triArea(3, 2);
console.log(resultTask5); // 3

resultTask5 = triArea(7, 4);
console.log(resultTask5); // 14

resultTask5 = triArea(10, 10);
console.log(resultTask5); // 50

// ----------------------------- TASK 6 -----------------------------
/* 
ADD UP THE NUMBERS FROM A SINGLE NUMER (Easy)

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10
addUp(13) ➞ 91
addUp(600) ➞ 180300
*/
const addUp = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
};

let resultTask6 = addUp(4);
console.log(resultTask6); // 10

resultTask6 = addUp(13);
console.log(resultTask6); // 91

resultTask6 = addUp(600);
console.log(resultTask6); // 180300

// ----------------------------- TASK 7 -----------------------------
/* 
FIND THE SMALLEST AND BIGGEST NUMBERS (Easy)
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
minMax([2334454, 5]) ➞ [5, 2334454]
minMax([1]) ➞ [1, 1]
*/
const minMax = (arr) => {
  let newArr = [];
  newArr.push(Math.min(...arr), Math.max(...arr));
  return newArr;
};

let resultTask7 = minMax([1, 2, 3, 4, 5]);
console.log(resultTask7); // [1, 5]

resultTask7 = minMax([2334454, 5]);
console.log(resultTask7); // [5, 2334454]

resultTask7 = minMax([1]);
console.log(resultTask7); // [1, 1]

// ----------------------------- TASK 8 -----------------------------
/* 
IS IT TIME FOR MILK AND COOKIES? (Easy)

Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
*/
const timeForMilkAndCookies = (date) => {
  let christ = 11;
  let mas = 24;

  if (date.getMonth() === christ && date.getDay(mas)) {
    return true;
  } else {
    return false;
  }
};

let resultTask8 = timeForMilkAndCookies(new Date(2013, 11, 24));
console.log(resultTask8); // true

resultTask8 = timeForMilkAndCookies(new Date(2013, 0, 23));
console.log(resultTask8); // false

resultTask8 = timeForMilkAndCookies(new Date(3000, 11, 24));
console.log(resultTask8); // true

// NOTE: A lot time was spend in research for the date methods.

// ----------------------------- TASK 9 -----------------------------
/* 
CHECK IF ONE ARRAY CAN BE NESTED IN ANOTHER (Easy)

Create a function that returns true if the first array can be nested inside the second and false otherwise.

arr1 can be nested inside arr2 if:
- arr1's min is greater than arr2's min.
- arr1's max is less than arr2's max.

Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true
canNest([3, 1], [4, 0]) ➞ true
canNest([9, 9, 8], [8, 9]) ➞ false
canNest([1, 2, 3, 4], [2, 3]) ➞ false
*/
const canNest = (arr1, arr2) => {
  if (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  ) {
    return true;
  } else {
    return false;
  }
};

let resultTask9 = canNest([1, 2, 3, 4], [0, 6]);
console.log(resultTask9); //true

resultTask9 = canNest([3, 1], [4, 0]);
console.log(resultTask9); //true

resultTask9 = canNest([9, 9, 8], [8, 9]);
console.log(resultTask9); //false

resultTask9 = canNest([1, 2, 3, 4], [2, 3]);
console.log(resultTask9); // false


// ----------------------------- TASK 10 -----------------------------
/* 
wHAT'S HIDING AMONGST THE CROWD? (Easy)

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
- The wanted word is in lowercase.
- The crowd of letters is all in uppercase.
- Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/
const detectWord = (string) => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      newString += string[i];
    }
  }
  return newString;
};

let resultTask10 = detectWord("UcUNFYGaFYFYGtNUH");
console.log(resultTask10); //cat

resultTask10 = detectWord("bEEFGBuFBRrHgUHlNFYaYr");
console.log(resultTask10); // burglar

resultTask10 = detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");
console.log(resultTask10); // embezzlement


// ----------------------------- TASK 11 -----------------------------
/* 
HOW MUCH IS TRUE? (Medium)

Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
*/
const countTrue = (arr) => {
  let count = 0;
  for (let bool of arr) {
    if (bool === true) {
      count++;
    }
  }
  return count;
};

let resultTask11 = countTrue([true, false, false, true, false]);
console.log(resultTask11); // 2

resultTask11 = countTrue([false, false, false, false]);
console.log(resultTask11); // 0

resultTask11 = countTrue([]);
console.log(resultTask11); // 0


// ----------------------------- TASK 12 -----------------------------
/* 
TILE TEAMWORK TACTICS (Medium)

In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.

Examples
possibleBonus(3, 7) ➞ true
possibleBonus(1, 9) ➞ false
possibleBonus(5, 3) ➞ false
*/
const possibleBonus = (num1, num2) => {
    if (num2 > num1 && num1 + 6 > num2) {
        return true;
    } else {
        return false;  
    }
}

let resultTask12 = possibleBonus(3, 7);
console.log(resultTask12); //true

resultTask12 = possibleBonus(1, 9);
console.log(resultTask12); // false

resultTask12 = possibleBonus(5, 3);
console.log(resultTask12); //false


// ----------------------------- TASK 13 -----------------------------
/* 
FIND NUMBER OF DIGITS IN NUMBER (Medium)

Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
num_of_digits(0) ➞ 1
*/
const num_of_digits = (num) => {
  let string = num.toString();
  return string.length;
};

let resultTask13 = num_of_digits(1000);
console.log(resultTask13); // 4

resultTask13 = num_of_digits(12);
console.log(resultTask13); // 2

resultTask13 = num_of_digits(1305981031);
console.log(resultTask13); // 10

resultTask13 = num_of_digits(0);
console.log(resultTask13); // 1


// ----------------------------- TASK 14 -----------------------------
/* 
WHICH GENERATION ARE YOU? (Medium)

Try finding your ancestors and offspring with code.
Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
- If the number is negative, return the related ancestor.
- If positive, return the related descendant.
- You are generation 0. In the case of 0 (male or female), return "me!".

Examples
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
*/
const generation = (num, char) => {
    const rescrs = {
        "-3": { "f": "great grandmother", "m": "great grandfather" },
        "-2": { "f": "grandmother", "m": "grandfather" },
        "-1": { "f": "mother", "m": "father" },
        "0": { "f": "me!", "m": "me!" },
        "1": { "f": "daugther", "m": "son" },
        "2": { "f": "granddaugther", "m": "grandson" },
        "3": { "f": "great granddaugther", "m": "great grandson" },
    };
    return rescrs[num][char];
};

let resultTask14 = generation(2, "f");
console.log(resultTask14); // granddaugther

resultTask14 = generation(-3, "m");
console.log(resultTask14); // great grandfather

resultTask14 = generation(1, "f") ;
console.log(resultTask14); // daugther


// ----------------------------- TASK 15 -----------------------------
/* 
FUNCTION FACTORY (Medium)
Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.
Please check the examples below for a clearer representation of the behavior expected.

Examples
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.
const plusFive = makePlusFunction(5)
plusFive(2) ➞ 7
plusFive(-8) ➞ -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.
const plusTen = makePlusFunction(10)
plusTen(0) ➞ 10
plusTen(188) ➞ 198
plusFive(plusTen(0)) ➞ 15
*/
const makePlusFunction = (base) => {
    return base
};

const plusFive = (num) => {
    return makePlusFunction(5) + num;
}

const plusTen = (num) => {
    return makePlusFunction(10) + num;
}

let resultTask15 = plusFive(2);
console.log(resultTask15); // 7

resultTask15 = plusFive(-8);
console.log(resultTask15); // -3

resultTask15 = plusTen(0);
console.log(resultTask15); // 10

resultTask15 = plusTen(188);
console.log(resultTask15); // 198

resultTask15 = plusFive(plusTen(0));
console.log(resultTask15); // 15

console.clear();

// ----------------------------- TASK 16 -----------------------------
/* 
ODDISH VS. EVENISH (Hard)

Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1
oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1
oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
*/
const oddishOrEvenish = (num) => {
    let arr = num.toString().split("").map(Number);
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    if (sum % 2 === 0) {
        return "Evenish";
    } else  {
        return "Oddish";
        
    }
}

let resultTask16 = oddishOrEvenish(43);
console.log(resultTask16); // Oddish

resultTask16 = oddishOrEvenish(373);
console.log(resultTask16); // Oddish

resultTask16 = oddishOrEvenish(4433);
console.log(resultTask16); // Evenish



