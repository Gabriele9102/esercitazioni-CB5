import { GET, POST, PATCH } from './api.js'
import { q, createCard, uuidv4 } from './utils.js'


const url = "http://localhost:3000/people"

const form = document.forms.people;
const element = form.elements
const Song = document.getElementById ("song")
const ul = q(".List")


const form2 = document.forms.victimPatch;
const elementF2 = form2.elements;



//-----------------------form POST-------------------

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		id: uuidv4(),
		link: element.Link.value,
		name: element.Name.value,
		surname: element.Surname.value,
	}

	POST(url, data)
	.then(() => location.reload())
})

//----------------------form PATCH-------------------

form2.addEventListener("submit", (e) => {
	e.preventDefault();
	
	const id = elementF2.id.value

	const data2 = {
		id: uuidv4(),
		link: elementF2.link.value,
		name: elementF2.name.value,
		surname: elementF2.surname.value,
	
	}


	PATCH(url, id, data2)
		.then(() => location.reload())
		.catch(e => console.log(e))
})

window.onload = GET(url)
	.then(res => res.map(people => {
		try {
			createCard(url, ul, people.link, people.name, people.surname, people.id)
		} catch (error) {
			console.log(error)
		}
	}))

	