/* Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

    The first human year corresponds to 15 cat years.
    The second human year corresponds to 9 cat years.
    Every subsequent human year corresponds to 4 cat years.

For example:
*/

function catAge(humanYears) {
  let catYears = 0

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
    } else if (i === 2) {
      catYears += 9
    } else {
      catYears += 4
    }

  }
  console.log(catYears);
  return catYears;
  
}


catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32

