// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

// let bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(weightKg, heightInM) {
  return weightKg / heightInM**2;
}

// Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

// Return the result as a string rounded to two decimals. For example:

console.log(calculateBMI(80, 180)); // "24.69"