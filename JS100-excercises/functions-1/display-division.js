// Determine the output that the following code will log to the console.

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}
multiplesOfThree;
// As the function was not invoked there will be no logs to the console

// if the function was invoked by changing it to multipleOfThree() we would get the following output

// 3 / 1 = 3
// 6 / 2 = 3
// 9 / 3 = 3
// and etc up to 30 / 10 = 3
