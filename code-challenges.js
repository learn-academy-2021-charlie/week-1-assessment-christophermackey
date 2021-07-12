// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// declare a function that takes a temperature number as a variable
// create if statement to check input against boiling point of 212 
// output return statement with results 

const tempCheck = (temperature) => {
    if(temperature === 212) {
        return "212 is at boiling point"
    } else if(temperature > 212) {
        return `${temperature} is above boiling point`
    } else {
        return `${temperature} is below boiling point`
    }
}
console.log(tempCheck(temp1));
console.log(tempCheck(temp2));
console.log(tempCheck(temp3))


// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// create function that takes in two array variables
// concat both arrays by assigning them to new variable
// return the new concated variable with a .sort method that contains an argument to sort numbers from lowest to highest
// log the function invocation with array variables provided

const singleArrayGenerator = (array1, array2) => {
    let newArray = array1.concat(array2)
    return newArray.sort((a, b) => a - b)
}
console.log(singleArrayGenerator(myNumbers1, myNumbers2));


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

var myString1 = "bravo"
var myString2 = "charlie"

// create function that takes in a single input
// return input with .reverse() mutator
// log the function invocation twice, each with different myString variables provided

// const reverseStringMachine = (string) => {
//     return string.reverse()
// }
// console.log(reverseStringMachine(myString1));
// console.log(reverseStringMachine(myString2));

// the code above gave me an error
// after reading through the syllabus I realized the .reverse() method only works on arrays.. duh!
// the input, a string, first needs to be .split("") which will convert it to an array
// the array can then be reversed with the .reverse() mutator
// then .join("") to change the reversed array back into a reversed string
// it worked!!! great success!

const reverseStringMachine = (string) => {
    return string.split("").reverse().join("")
}
console.log(reverseStringMachine(myString1));
console.log(reverseStringMachine(myString2));

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

// create function that holds two number variables
// add if statment to evaluate which number variable is larger
// return larger variable minus smaller variable
//log subtractor function with provided variables

// const subtractor = (num1, num2) => {
//     if(num1 > num2) {
//         return num1 - num2
//     } else {
//         return num2 - num1
//     }
// }

// var numberExample1 = 42
// var numberExample2 = 27

// var numberExample3 = 7
// var numberExample4 = 19

// console.log(subtractor(numberExample1, numberExample2));
// console.log(subtractor(numberExample3, numberExample4));

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

// copy/paste code from question #4
// modify if statement to also include evaluator to check if "typeof" num1 and num2 are equal to a number data type
// log with provided variables

const subtractor = (num1, num2) => {
    if(num1 > num2 && typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2
    } else {
        return num2 - num1
    }
}

console.log(subtractor(numberExampleRefactor1, numberExampleRefactor2));
console.log(subtractor(numberExampleRefactor3, numberExampleRefactor4));
