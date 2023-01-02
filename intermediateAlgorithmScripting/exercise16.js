// Steamroller - exercise 16
// @Author Benites, Matias M. 2023

/* 
>Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
*/
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
