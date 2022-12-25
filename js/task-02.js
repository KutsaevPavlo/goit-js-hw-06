const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElemCont = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
const liElem = document.createElement("li");
liElem.classList.add('item');
liElem.textContent = ingredient;
return liElem;
});


liElemCont.append(...elements);

