const textInput = document.querySelector('input#font-size-control');


const spanText = document.querySelector('span#text');

textInput.addEventListener("input", (event) => {
    spanText.style.fontSize = textInput.value + 'px';
    
    });
