function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const deleteBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', (OnBtnCreateClick) => {
  let amount = inputValue.value;
  let size = 30;
  function createBoxes(amount) {
   
    for (let index = 0; index < amount; index += 1) {

      const createDiv = document.createElement('div');
      createDiv.style.backgroundColor = getRandomHexColor();
      createDiv.style.width = `${size}px`;
      createDiv.style.height = `${size}px`;
      size += 10;
      boxes.appendChild(createDiv);
    } 
  };
  return createBoxes(amount);
});

deleteBtn.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  boxes.innerHTML = '';
}
  