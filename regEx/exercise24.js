// Match Non-Whitespace Characters - exercise 24
// @Author Benites, Matias M. 2022

/* 


You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;

The value returned by the .length method would be 32.

>Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
*/
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/gi;
let result = sample.match(countNonWhiteSpace);
