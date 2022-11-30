// Global vs. Local Scope in Functions - exercise 54
// @Author Benites, Matias M. 2022

/* 


It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

The function myFun will return the string Head because the local version of the variable is present.

Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
*/
const outerWear = "T-Shirt";

function myOutfit() {
   const outerWear = "sweater";
  return outerWear;
}

myOutfit();