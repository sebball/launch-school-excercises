// Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?



function caseInsensitiveEquals(wordOne, wordTwo) {
  wordOne = wordOne.toUpperCase()
  wordTwo = wordTwo.toUpperCase()

  if (wordOne === wordTwo) {
    return true;
  } else {
    return false;
  }
}

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

console.log(caseInsensitiveEquals(string1, string2));
console.log(caseInsensitiveEquals(string1, string3));