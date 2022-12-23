// Truncate a String - exercise 8
// @Author Benites, Matias M. 2022

/* 
>Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
function truncateString(str, num) {
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
*/
function truncateString(str, num) {
  let accum = "";
  if (str.length > num) {
    return (accum = str.slice(0, num) + "...");
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
