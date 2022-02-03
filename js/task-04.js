let counterValue = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let count = 0;
decrementBtn.addEventListener('click', () => {
    counterValue.textContent = count -= 1;
});

incrementBtn.addEventListener('click', () => { 
    counterValue.textContent = count += 1;
});