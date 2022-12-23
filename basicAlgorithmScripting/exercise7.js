// Repeat a String Repeat a String - exercise 7
// @Author Benites, Matias M. 2022

/* Repeat a given string str (first argument) for num times (second argument). 
>Return an empty string if num is not a positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
*/
function repeatStringNumTimes(str, num) {
  let accum = "";
  if (str !== "" && num > 0) {
    for (let i = 0; i < num; i++) {
      accum += str;
    }
  } else {
    return (str = "");
  }
  return accum;
}
repeatStringNumTimes("abc", 3);
