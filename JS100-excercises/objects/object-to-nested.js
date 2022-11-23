// Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

personArray = []
for (let prop in person) {
  personArray.push([prop, person[prop]]);
}

console.log(personArray);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
