// DNA Pairing - exercise 8
// @Author Benites, Matias M. 2023

/* 
>Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, 
which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
function pairElement(str) {
  return str;
}

pairElement("GCG");
*/
function pairElement(str) {
  const matchingBasePair = function (char) {
    switch (char) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  };

  const pairs = [];
  for (let i = 0; i < str.length; i++) {
    pairs.push(matchingBasePair(str[i]));
  }

  return pairs;
}

pairElement("GCG");
