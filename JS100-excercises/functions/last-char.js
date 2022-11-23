// Create a function removeLastChar that takes a string as an argument, and returns the string without the last character.

function removeLastChar(strArg){
  console.log(strArg.slice(0, -1));
  return strArg.slice(0, -1);
}


removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'
