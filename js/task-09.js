 
const color = document.querySelector('.color'); 
const btn = document.querySelector('.change-color');

btn.addEventListener('click', OnchangeColor);

function OnchangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
 
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

