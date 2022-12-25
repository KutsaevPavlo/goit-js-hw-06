const textInput = document.querySelector('input#validation-input');


textInput.addEventListener("blur", dataLengthTest);

function dataLengthTest (event, onInputBlurRemuve){

    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else if (event.currentTarget.value.length !== Number(textInput.dataset.length)) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }}
;

