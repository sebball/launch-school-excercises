// Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().


function repeat(numRepeats, str) {
  let newString = str
  for (let i = 0; i < numRepeats - 1; i++) {
    newString = newString + str
  }
  console.log(newString)
}

repeat(3, 'ha'); // 'hahaha'