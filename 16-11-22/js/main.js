import { GET, POST } from './api.js'
import { q, createCard, uuidv4 } from './utils.js'


const url = "http://localhost:3000/people"

const form = document.forms.people;
const element = form.elements
const Song = document.getElementById ("song")
const ul = q(".List")


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

window.onload = GET(url)
	.then(res => res.map(people => {
		try {
			createCard(url, ul, people.link, people.name, people.surname, people.id)
		} catch (error) {
			console.log(error)
		}
	}))

	