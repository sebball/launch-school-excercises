// We are given the following array of energy sources.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

// Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

// delete energy[energy.indexOf("fossil")];
energy.shift()
energy.push("geothermal");
let newEnergy = energy.filter(word => (word));
console.log(newEnergy);



