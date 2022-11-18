import { DELETE } from "./api.js";

const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);
const bodyEl = q("body");
console.log(bodyEl)

// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}

const createCard = (url, parent, link, name, surname, id) => {
	const sectionEl = q(".cards")
	const wrapperEl = c('li');
	const cardEl = c("div")
	const imgEl = c("img");
	const nameEl = c('p');
	const surnameEl = c('p');
	const btn = c('button');
	
	wrapperEl.className = "list__card"
	btn.className = "btn"
	
	
	imgEl.setAttribute("src", link);
	imgEl.setAttribute("alt", "");
	nameEl.textContent = name
	surnameEl.textContent = surname
	btn.textContent = "Resurrect"

	btn.addEventListener("click", () => {
		DELETE(url, id)
			.then(() => location.reload())
	})
	
	
	cardEl.addEventListener('dblclick', () => {
		const patchForm = document.forms.victimPatch
		patchForm.style.opacity = "1"
		const elements = patchForm.elements;

		elements.id.value = id
		elements.name.value = nameEl.textContent
		elements.surname.value = surnameEl.textContent

		

	})

	
	cardEl.append(imgEl, nameEl, surnameEl, btn);
	wrapperEl.append(cardEl);
  	sectionEl.appendChild(wrapperEl);
}


export { c, q, uuidv4, createCard }