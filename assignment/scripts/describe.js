// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane' as a string. 
// We run a conditional statement which checks if name is equal to the string 'Mary' and the underlying data types of two comparisons are the same
// Since variable 'name' does not equal 'Mary', the code jumps to the else statement on line 40
//console.log will display 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret without initializing it. 
// We declare and initialize a variable called 'code' to 123. 
// We compare the variable code to the number 123 to make sure the quantity and underlying data types match
//Since code and 123 match we set the variable secret to 'equal' and multiply code by 2 (code = 246)
//the code in the second if statement is skipped as the variable code is less than 250
//We console log 'super'
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare and initialize three variables called isStudent (boolean), age (number) and zip (number)
// We run through three conditionals where we first check if isStudent is true and zip is greater than 8000
// the second conditional where either isStudent is false or age is less than 30, the third conditional where isStudent alone is true
//Since the third conditional is the first true statement we console log 'Welcome to Prime!'. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX - colorOne is set to red instead of blue, and colorTwo is set to blue instead of red
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  //FIX - only colorOne is set to purple. colorTwo also needs to be set to 'purple'.
  //should include code line colorTwo='purple';
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
//FIX  - we may want to use let instead of constant to declare time as the instructions ask us to create two variables. 
//const is used to create constants not variables
let temp = 40;
const time = 4;

//FIX  - we want to use && not || in the below if statement to signify 'and' per the instructions. Our current code signifies 'or'
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - we want to swap what's in the code block for the if and else statements. Currently, if our age is greater than or equal to 21(minAge) we print 'no entry'
//after checking if age is greater than or equal to minAge we want to have the statement console.log('enter') in the first if code block

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

