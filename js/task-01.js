const menuItemsByTagName = document.querySelectorAll("li.item");
const categories = document.querySelectorAll("h2");
const Elements = document.querySelectorAll("li.item ul");

console.log(`Number of categories: ${menuItemsByTagName.length}`);

for (let i = 0; i < menuItemsByTagName.length; i += 1){
console.log(`Category: ${categories[i].textContent}`);
console.log(`Elements: ${Elements[i].children.length}`);
}




 



