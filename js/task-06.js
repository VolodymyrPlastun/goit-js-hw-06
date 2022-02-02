const inputLink = document.querySelector('#validation-input');
inputLink.addEventListener('blur', changeFocus);

function changeFocus(event) {
    
    const stringLength = event.currentTarget.value.length;
    const inputLength = event.currentTarget.dataset.length;
     inputLink.classList.add('invalid');
    if (stringLength == inputLength) {
        inputLink.classList.replace('invalid', 'valid');
    }
    
}
