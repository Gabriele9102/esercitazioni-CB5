import products from "./products.js";
console.log(products);
const createCard = (title, thumbnail, description, parent) => {
    
    const heroEl= document.createElement("div");
    heroEl.className = "hero__card";
    const titleEl = document.createElement("h1");
    titleEl.textContent = title
    
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", thumbnail);
    
    const parEl = document.createElement("p");
    parEl.textContent = description;
    
    
    heroEl.append( titleEl, imgEl, parEl);
    parent.appendChild(heroEl);

}

const smartphonesEl= document.querySelector(".Smartphones");
const laptopEl= document.querySelector(".Laptops");

const headerLaptops = document.createElement("h1");
const headerSmartphones = document.createElement("h1");

headerSmartphones.textContent = "Smartphones"
headerLaptops.textContent = "Laptops"

smartphonesEl.appendChild(headerSmartphones);
laptopEl.appendChild(headerLaptops);


products
   .filter((product) => product.category === "smartphones")
   .map((product) => {
     
    createCard(
       product.title,
       product.thumbnail,
       product.description,
       product.category,
       smartphonesEl
     )
     });


     
     products
   .filter((product) => product.category === "laptops")
   .map((product) => {
     
    createCard(
       product.title,
       product.thumbnail,
       product.description,
       product.category,
       laptopEl
     )
     });











