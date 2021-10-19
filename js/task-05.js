const inputEl = document.querySelector('input#name-input');
inputEl.addEventListener('input', inputName);

const spanEl = document.querySelector('span#name-output');

function inputName() {
    if (inputEl.value === '') {
        return spanEl.textContent = 'Anonymous';
    } return spanEl.textContent = inputEl.value;
}; 