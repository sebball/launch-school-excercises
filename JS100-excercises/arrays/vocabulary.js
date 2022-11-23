// We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];


function sayer(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j])
    }
}

sayer(vocabulary)