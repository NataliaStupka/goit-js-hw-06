const categoriesEl = document.querySelectorAll('.item');
const categoriesElLength = categoriesEl.length;

console.log('Number of categories:', categoriesElLength);

categoriesEl.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);

})

// const titlesEl = document.querySelectorAll('h2');
// titlesEl.forEach((title, index) => {
//     console.log('Category:', title.textContent);
//     console.log(`Elements: ??`)
//  })