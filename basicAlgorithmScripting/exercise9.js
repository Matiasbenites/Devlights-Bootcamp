// Finders Keepers - exercise 9
// @Author Benites, Matias M. 2022

/* 
>Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. 
This means that given an element x, the 'truth test' is passed if func(x) is true. 
If no element passes the test, return undefined.
function findElement(arr, func) {
  let num = 0;
  return num;
}

FFElement([1, 2, 3, 4], num => num % 2 === 0);
*/
function findElement(arr, func) {
  function findElement(arr, func) {
    let n = 0;

    for (let i = 0; i < arr.length; i++) {
      n = arr[i];
      if (func(n)) {
        return n;
      }
    }

    return undefined;
  }
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
