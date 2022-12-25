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


const liElemCont = document.querySelector(".gallery");


// const image = images.map(image => {
//   const imgElem = document.createElement("img");
//   imgElem.src = image.url;
//   imgElem.alt = image.alt;
//   return imgElem;
//   });


//   liElemCont.append(...image);


const image = images.map(image => `<li><img class="grid" src="${image.url}" alt="${image.alt}" width="400" height="300"></li>`).join("");
  
  
liElemCont.insertAdjacentHTML( 'afterbegin', image);

