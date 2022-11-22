// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.


let origStr = 'launch school tech & talk'

let wordArray = origStr.split(" ");
console.log(wordArray, typeof origStr, typeof wordArray);
let newString = "";

for (let i = 0; i < wordArray.length; i++) {
  let wordStr = wordArray[i];
  let char = wordStr[0];
  charUpper = char.toUpperCase();

  let newWord = wordStr.replace(char, charUpper);
  wordArray[i] = newWord;

  
  
}
newString = newString + wordArray.join(" ");
console.log(newString);
