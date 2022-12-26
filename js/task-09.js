function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const bodyEl = document.querySelector("body");


// const getColor = document.querySelector('.change-color');

// const spanColor = document.querySelector('.color');

// getColor.addEventListener("click", handleClick);

  

// function handleClick () {
 
//   spanColor.textContent = getRandomHexColor();
  
//   bodyEl.style.backgroundColor  = getRandomHexColor();;
// };


const bodyEl = document.querySelector("body");


const getColor = document.querySelector('.change-color');

const spanColor = document.querySelector('.color');

getColor.addEventListener("click", () => {
    const color = getRandomHexColor();
    spanColor.textContent = color;
    bodyEl.style.backgroundColor  = color;
  }
  );

  

