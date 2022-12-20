//Reverse a String - exercise 2
// @Author Benites, Matias M. 2022

/* 
>Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".
function reverseString(str) {
  return str;
}

reverseString("hello");
*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
