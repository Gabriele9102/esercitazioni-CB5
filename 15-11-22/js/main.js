import { c, q, GET, POST, uuidv4 } from './utils.js'
const url = "http://localhost:3000/people"

const form = document.forms.people;
const element = form.elements

const ul = q(".List")


form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		id: uuidv4(),
		name: element.Name.value,
		surname: element.Surname.value
	}

	POST(url, data)
		.then((response) => response.json())
		.then((res) => {
			console.log('Success:', res);
		})
		.catch((error) => {
			console.error('Error:', error);
		})
})


window.onload = GET(url).then(res => res.map(peoples => ul.innerHTML += `<li> ${peoples.id}: ${peoples.name} ${peoples.surname} </li>`));

