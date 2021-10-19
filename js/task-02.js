const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);
const listEl = document.querySelector('#ingredients');

const itemElAppend = ingredients.map((ingredient, index) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = (ingredients[index]);
  itemEl.classList.add('item');

  console.log(itemEl);

  return itemEl
})

listEl.append(...itemElAppend);


