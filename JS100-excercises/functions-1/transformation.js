// Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

let word = "Captain Ruby";

splitWords = word.split(" ")
splitWords[1] = "Javascript"
let newWord = `${splitWords[0]} ${splitWords[1]}`
console.log(newWord)