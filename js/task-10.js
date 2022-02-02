function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputValue = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const deleteBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


let width = boxes.style.width = "30px";
let height = boxes.style.height = "30px";

createBtn.addEventListener('click', (OnBtnCreateClick) => {
  let amount = inputValue.value;
  
  function createBoxes(amount) {
   
    for (let index = 0; index < amount; index += 1) {

  boxes.insertAdjacentHTML('afterbegin', '<div></div>');
    } 
  };
  return createBoxes(amount);
});

deleteBtn.addEventListener('click', destroyBoxes);

function destroyBoxes(event) {
  boxes.innerHTML = '';
}
  
// Не могу сообразить как обратиться к каждому отдельному диву.
//   Правильно ли начал делать?