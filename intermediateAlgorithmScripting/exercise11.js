// Convert HTML Entities - exercise 11
// @Author Benites, Matias M. 2023

/* 
>Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  return str;
}

convertHTML("Dolce & Gabbana");
*/
function convertHTML(str) {
  var n = str.split("");

  for (var i = 0; i < n.length; i++) {
    switch (n[i]) {
      case "<":
        n[i] = "&lt;";
        break;
      case "&":
        n[i] = "&amp;";
        break;
      case ">":
        n[i] = "&gt;";
        break;
      case '"':
        n[i] = "&quot;";
        break;
      case "'":
        n[i] = "&apos;";
        break;
    }
  }

  n = n.join("");
  return n;
}

convertHTML("Dolce & Gabbana");
