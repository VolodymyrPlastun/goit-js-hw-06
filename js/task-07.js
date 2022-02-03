const fontSizeInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

textOutput.style.fontSize = `${fontSizeInput.value}px`;

fontSizeInput.addEventListener('input', (onOutputResize) => {
  textOutput.style.fontSize = `${onOutputResize.currentTarget.value}px`;
});