// Palindrome Checker - 1st Project
// @Author Benites, Matias M. 2023

/* 
>Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
function palindrome(str) {
  return true;
}

palindrome("eye");
*/
function palindrome(str) {
  let n_alphanumChars = str.replace(
    /[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    ""
  );
  n_alphanumChars = n_alphanumChars.toLowerCase().split("");
  for (let i = 0; i < n_alphanumChars.length - 1 / 2; i++) {
    if (
      n_alphanumChars[i] !== n_alphanumChars[n_alphanumChars.length - i - 1]
    ) {
      return false;
      break;
    }
  }
  return true;
}

// Individual test cases below

palindrome("eye");

palindrome("_eye");

palindrome("race car");

palindrome("not a palindrome");

palindrome("A man, a plan, a canal. Panama");

palindrome("never odd or even");

palindrome("nope");

palindrome("almostomla");

palindrome("My age is 0, 0 si ega ym.");

palindrome("1 eye for of 1 eye.");

palindrome("0_0 (: /- :) 0-0");

palindrome("five|_/|four");
