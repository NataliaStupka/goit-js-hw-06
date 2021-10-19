
const inputEl = document.querySelector('input#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', onValidInput);

function onValidInput (event) {
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        console.log('border-color: green')
    } else {
        inputEl.classList.add('invalid');
        console.log('border-color: red');
    }

}


