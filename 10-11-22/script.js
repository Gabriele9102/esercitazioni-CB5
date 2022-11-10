const bodyEl = document.querySelector("body");

//-----------------Creazioni elementi dinamici-----------------------

const loadingEl = document.createElement("h6");

const card = document.createElement("div");
const span = document.createElement("span");
const h3 = document.createElement("h3");
const divider = document.createElement("divider")
const btn = document.createElement("button");

bodyEl.appendChild(loadingEl);
card.append(span, h3, divider, btn);
bodyEl.append(card);
console.log(bodyEl);

//-------------------- Modifiche elementi html-----------------------
card.className = "container";
span.id= "advice";

divider.innerHTML = '<img src="./images/pattern-divider-mobile.svg" alt="Icon" />';

btn.className = "btn-refresh";
btn.innerHTML = '<img src="./images/icon-dice.svg" alt="Icon" />';

//--------------------- Chiamata .fetch ----------------------------

const urlData = "https://api.adviceslip.com/advice";
/**
 * 
 * @param {string} URL 
 */
const getData = (URL) => {  loadingEl.classList.remove("active")
fetch(URL, { cache: "no-cache" })
.then((res) => res.json())
.then((res) =>(span.innerText = "ADVICE # "+ res.slip.id) + (h3.innerHTML = `"` + res.slip.advice + `"`))
}

console.log(urlData);
window.onload = getData(urlData);


btn.addEventListener("click", () => { getData(urlData)});