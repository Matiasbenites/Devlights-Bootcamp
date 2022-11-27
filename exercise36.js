// Use Bracket Notation to Find the Last Character in a String - exercise 36
// @Author Benites, Matias M. 2022
/* 
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if const firstName = "Ada", you can get the value of the last letter of the string by using firstName[firstName.length - 1].

Example:

const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];

lastLetter would have a value of the string a.

>Use bracket notation to find the last character in the lastName variable.

Hint: Try looking at the example above if you get stuck.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName; // Change this line
*/

const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length - 1];