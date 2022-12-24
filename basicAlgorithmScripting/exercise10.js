// Boo who - exercise 10
// @Author Benites, Matias M. 2022

/* 
>Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
function booWho(bool) {
  return bool;
}

booWho(null);
*/
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
