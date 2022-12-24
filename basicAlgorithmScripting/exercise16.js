// Chunky Monkey - exercise 16
// @Author Benites, Matias M. 2022

/* 
>Write a function that splits an array (first argument) into groups the length of size (second argument) and 
returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
*/
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
