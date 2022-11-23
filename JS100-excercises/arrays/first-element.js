// Write a function that returns the first element of an input array. For example:

function first(arr) {
  if (arr.length === 0){
    return null;
  } else {
    return arr[0];
  }
}



console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'