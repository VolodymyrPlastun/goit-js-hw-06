const inputLink = document.querySelector('#validation-input');
inputLink.addEventListener('blur', changeFocus);

function changeFocus(event) {
    
    const stringLength = event.currentTarget.value.length;
    const inputLength = event.currentTarget.dataset.length;
    // У меня этот вариант отлично работает, не знаю почему у Вас по другому

    inputLink.classList.add('invalid');
    
    if (stringLength == inputLength) {
        inputLink.classList.replace('invalid', 'valid');
    }
 
    
}

// Можно еще вот так сделать

    //    inputLink.classList.remove('valid');
    // inputLink.classList.add('invalid');
    // if (stringLength == inputLength) {
    //           inputLink.classList.replace('invalid', 'valid');

    // }
    
