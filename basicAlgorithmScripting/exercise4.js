// Find the Longest Word in a String - exercise 4
// @Author Benites, Matias M. 2022

/* 
>Return the length of the longest word in the provided sentence.

Your response should be a number.
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
*/
function findLongestWordLength(str) {
  let words = str.split(" ");
  let max = 0;
  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
      longest = max;
    }
  }
  return longest;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
