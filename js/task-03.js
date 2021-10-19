const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');

const createImg = images.map(image => 
  `<li> <img 
        src = '${image.url}'
        alt = '${image.alt}'
        width = 500
         />
   </li>`
).join("")

galleryEl.insertAdjacentHTML("afterbegin", createImg)
console.log(galleryEl);



// ======= 2 вариант =======

// const galleryElTwo = document.querySelector('.gallery');

// images.forEach((image, index) => {
//   const item = document.createElement("li");
 
//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;
//   img.width = 500;
//   item.append(img);

//    galleryElTwo.append(item);
// });
//  console.log(galleryElTwo);