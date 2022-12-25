const textInput = document.querySelector('input#font-size-control');
console.log("🚀 ~ file: task-07.js:2 ~ textInput", textInput)

const spanText = document.querySelector('span#text');

textInput.addEventListener("input", (event) => {
    spanText.style.fontSize = textInput.value + 'px'
    });
