let counterValue = 0;

const buttonDecrementEL = document.querySelector('button[data-action="decrement"]');
buttonDecrementEL.addEventListener("click", (event) => {
    counterValue -= 1;
    valueEl.textContent = `${counterValue}`;
    console.log('вешаю слушателя -')
 });
console.log(buttonDecrementEL);


const valueEl = document.querySelector('#value');
console.log(valueEl);


const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
buttonIncrementEl.addEventListener("click", (event) => {
    counterValue += 1;
    valueEl.textContent = `${counterValue}`;
    console.log('вешаю слушателя +')
 });
console.log(buttonIncrementEl);

