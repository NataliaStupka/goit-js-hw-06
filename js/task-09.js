
const changeColorEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
changeColorEl.addEventListener('click', onChangeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// 1 вариант
const bodyEl = document.querySelector('body');
function onChangeColor() {

  bodyEl.style.background = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}


// 2 вариант
// function onChangeColor(event) {
//   spanEl.textContent = getRandomHexColor();
//   if (!event.target.classList.contains('change-color')) {
//     return
//   }
//   return (document.body.style.background = getRandomHexColor());
// }
