const form = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output');

form.addEventListener('input', (replaceText) => {
    
    if (replaceText.currentTarget.value === "") {
        return formOutput.textContent = "Anonymous";
    }
    formOutput.textContent = replaceText.currentTarget.value;
    
});

