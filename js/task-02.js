const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');

const ingredientsNames = ingredients.forEach(function (element) {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = element;
  list.appendChild(listItem);
});

