
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    textInput.value.trim() != ''
    ? output.textContent = event.currentTarget.value
    : output.textContent = "Anonymous";
   
});
