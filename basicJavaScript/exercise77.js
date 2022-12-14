// Adding a Default Option in Switch Statements - exercise 77
// @Author Benites, Matias M. 2022

/* 
In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

>Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line



  // Only change code above this line
  return answer;
}

switchOfStuff(1);
*/
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a" || "A":
      answer = "apple";
      break;
    case "b" || "B":
      answer = "bird";
      break;
    case "c" || "C":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

switchOfStuff(1);
