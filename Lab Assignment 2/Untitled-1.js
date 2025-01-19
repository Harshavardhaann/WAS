// Declare variables for the full name and age
var fullName;
var age;

// Declare four variables without assigning values
var var1, var2, var3, var4;

// Declare four variables with assigned values
var1=10, var2=11,var3=12,var3=14,var4=15;

// Declare variables to store first name, last name, marital status, country, and age in multiple lines
let First_Name= "Harsha";
let Last_Name = "K";
let Marital_Status = "Single";
let Country = "INDIA";
let Age =23;


// Declare variables to store first name, last name, marital status, country, and age in a single line
let First_Name2= "Harsha", Last_Name2 = "K",Marital_Status2 = "Single",Country2 = "INDIA",Age2 =23;

// Declare two variables _myAge_ and _yourAge_ and assign them initial values
  let myAge = 25;
  let yourAge = 30;
  
// Log to the browser console
console.log(`I am ${myAge} years old.`);
console.log(`You are ${50} years old`);


// Constant 
// Declare a variable using var, let, and const, and log their initial values to the console.
var myvar = "Using the VAR";
let mylet = "Using the LET";
const myconst ="Using the Const";

console.log("Initial values:");
console.log(myvar);
console.log(mylet);
console.log(myconst);

// Try reassigning values to each variable.
 myvar = "Reassigned var values";
 mylet = "Reassigned let values"


console.log(myvar);
console.log(mylet);

// What happens with const?
/* The reason const variables cannot be reassigned in JavaScript is due to the way they are designed to behave. 
When you declare a variable using const, 
you're telling JavaScript that the variable's value is constant and should remain the same throughout the scope where it was declared */


// Try redeclaring each variable in the same scope.

var myvar = "Reassigned var again";
// let mylet ="Reassigned let again";

console.log(myvar);
console.log(mylet);
// Observe the behavior of var, let, and const.

//Data Types
//Declare variables and assign string, boolean, undefined and null data types
//Whether you are a student (true/false).
//Log the values and their types to the console using typeof.
let name = "Harsha";
let student = true;
let undefinedVar;
let log=null;

console.log(name,typeof name);
console.log(student,typeof student);
console.log(undefinedVar, typeof undefinedVar);
console.log(log, typeof log);

// comments can make code readable
/*
  comments can make code readable,
  easy to use and informative
*/
//Type Conversion
//Declare a variable price with the value "100".
let price=100;

//Convert price to a number and log the result.
let priceNumber = Number(price);
console.log(priceNumber);

//Convert price back to a string and log the result.
let priceString = String(priceNumber);
console.log(priceString);

//Template Literals
//Create variables for your first name, last name, and favorite programming language.
let First_Name3="Harsha";
let Last_Name3="K";
let favorite_programming_language="HTML";
//Use template literals to display: Hi, I'm [first name] [last name], and my favorite language is [language].
console.log(`I am ${First_Name3} ${Last_Name3} And My Favorite programming language is $favorite_programming_language}`);
//Hint : \n \t 

//Booleans

