
//---------------------------------Creazione cards e chiamata GET----------------------------------//


const url = "http://localhost:3000/attori"

const GET = fetch(url)
.then(resp => resp.json())
.then(item => createCard(item));

createCard = (data) => {

    const cardContainer = document.querySelector(".card_container")
    

    for (let item of data){
        const card = document.createElement("div")

        const name = document.createElement("span")
        const surname = document.createElement("span")
        const birth = document.createElement("span")

        card.className="cardActor";
        name.className = "name";
        surname.className = "surname";
        birth.className = "birth";

        name.textContent = "Name: " +' ' + item.nome;
        surname.textContent = "Surname: " +' ' + item.cognome;
        birth.textContent = "Birthday: " + ' ' + item.data_nascita;

        card.append(name, surname, birth);
        cardContainer.append(card);
}}

