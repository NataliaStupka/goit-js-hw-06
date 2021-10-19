


const slider = document.querySelector('input#font-size-control');
console.log(slider);

const textEl = document.querySelector('span#text');

slider.addEventListener('change', onChangesFontSize);

function onChangesFontSize(event) {
    textEl.style.fontSize = slider.value + 'px';
    
    console.log('value', event.currentTarget.value)
}

