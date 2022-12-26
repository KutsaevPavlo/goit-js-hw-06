const textInput = document.querySelector('input#validation-input');


textInput.addEventListener("blur", dataLengthTest);


function classManip(remove, add){
    textInput.classList.remove(remove);
    textInput.classList.add(add);
        
}

function dataLengthTest (event){

    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        classManip('invalid', 'valid');
       
    } else if (event.currentTarget.value.length !== Number(textInput.dataset.length)) {
        classManip('valid', 'invalid');
      
    }}
;


