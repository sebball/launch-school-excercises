// We have made a grocery list, and as we check off items on that list, we would like to remove them.

// Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.
let index = groceryList.length;
for (let i = 0; i < index ; i++) {
  console.log(groceryList.shift());
}

if (groceryList.length == 0) {
  console.log(groceryList);
}

return groceryList;

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus
// []