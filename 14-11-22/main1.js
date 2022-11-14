import { q, gI, getId, GET } from './utils.js'
const Loader = q("lds-ring")
const Id1 = gI("id1")
const Id2 = gI("id2")
const parag = q(".text")

const btnPrev = q(".btn-prev")
const btnNext = q(".btn-next")

//---------------------------------- URL ---------------------------------------------
const url = "https://jsonplaceholder.typicode.com/posts"
let index = 1;

//----------------------------------------- Event listener buttons-------------------------------
btnPrev.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPost(instruction)
})

btnNext.addEventListener('click', (e) => {
	let instruction = e.target.textContent;
	getPost(instruction)
})



const getPost = (instruction) => {

	if (!instruction) {
		instruction = 1;
	} else {
		instruction = instruction.toLowerCase();
	};

	switch (instruction) {
		case 'prev':
			index = index - 1;
			break;
		case 'next':
			index = index + 1;
			break;
		default:
			index = instruction;
	}

	GET(`${url}/${index}`)
		.then(res => {
			Id1.textContent = res?.title;
			Id2.textContent = `#` + (res?.id);
			parag.textContent =  res?.body;
			if (index <= 1) {
				btnPrev.disabled = true;
				btnPrev.classList.add("disabled")
			} else {
				btnPrev.disabled = false;
				btnPrev.classList.remove("disabled")
			}

			if (index >= 10) {
				btnNext.disabled = true;
				btnNext.classList.add("disabled")
			} else {
				btnNext.disabled = false;
				btnNext.classList.remove("disabled")
			}
		}) .finally(() => {Loader.style = "display: none;"
		Container.style = "display: block;"; });
}
			

window.onload = getPost();