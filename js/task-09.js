 
const color = document.querySelector('.color'); 
const btn = document.querySelector('.change-color');

btn.addEventListener('click', OnchangeColor);



function OnchangeColor(event) {
  let randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

