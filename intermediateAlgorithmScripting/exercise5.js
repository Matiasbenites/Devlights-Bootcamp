// Spinal Tap Case - exercise 5
// @Author Benites, Matias M. 2023

/* 
>Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str;
}

spinalCase('This Is Spinal Tap');
*/
function spinalCase(str) {
  const regEx = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  return str.replace(regEx, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
