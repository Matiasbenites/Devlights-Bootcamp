// Pig Latin - exercise 6
// @Author Benites, Matias M. 2023

/* 
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

>Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
*/
function translatePigLatin(str) {
  let regEx = /^[aeiou]/;
  let regEx2 = /^[^aeiou]+/;

  if (str.match(regEx)) {
    return str + "way";
  }

  const cluster = str.match(regEx2)[0];
  return str.substring(cluster.length) + cluster + "ay";
}

translatePigLatin("consonant");
