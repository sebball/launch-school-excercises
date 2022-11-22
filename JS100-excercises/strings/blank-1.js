//  Write a function that checks whether a string is empty or not. For example:

function isBlank(str) {
  if (str.length > 0) {
    console.log(false)
  }
  else {
    console.log(true)
  }
}


isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true