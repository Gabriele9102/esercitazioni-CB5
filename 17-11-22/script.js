import { qs, ce, GET} from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

let prod = [];

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  prod = productsList.map((product) => {
    createCardEl(product, cardList);
    return product;
  });
});


inputEl.addEventListener("input", (e) => {
  cardList.textContent = "";
  prod.filter(
    (product) =>
      product.title.includes(e.target.value) &&
      createCardEl(product, cardList)
  );
});

//-------------------------Modale------------------------



let modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
