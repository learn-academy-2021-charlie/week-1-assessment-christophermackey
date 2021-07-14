// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer: This will log the length of the string provided in the cohort variable, which is 12.
// b) Verify and explain: 12 was logged. The string contains 12 characters including the space between charlie and 2021


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: this should log the second 'l' in 'Hello'
// b) Verify and explain: 'l' was logged. the greeting variable was logged with the 3rd index called on in the string. strings are 0 indexed, therefore, the second 'l' is in the 3rd index.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: this should log "Ruby"
// b) Verify and explain: "Ruby" was logged. the languages variable was called using an index property. the index passed in is a variable assigned with the number 1. 1 is then used to reference the 1st index(second character) in the languages string. 


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: this should capitalize all letters in the strings of the array in the weekendDays variable.
// b) Verify and explain: this logged an error which I immediatly realized is because the .toUpperCase() method works on strings, not arrays. I definitely answered this question too quickly without taking a minute to look at all the structure of the code


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: should log "number"
// b) Verify and explain: "number" was logged! dataTypes.length will give us the number 3. However, there is a typeof operator in front which gives us the data type of the length of the dataTypes variable.
