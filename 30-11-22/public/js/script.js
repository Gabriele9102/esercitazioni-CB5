
//---------------------------------Creazione cards e chiamata GET----------------------------------//


const url = "http://localhost:3000/attori"
const delete_url = "http://localhost:3000/attore"
const add_url = "http://localhost:3000/attore"

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

let id;

const POST = async (BASE_URL, data) => {
    return await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ data }),
    });
  };

const DELETE = async (url,id) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'id':id})
    });
    return res.json();
};

fetch(url_actor)
.then(resp => resp.json())
.then(item => createActor(item));

createActor = (data) => {

    const containerCard = document.querySelector(".containerCard")

    for (let item of data){

        const id = item.id

        const cardActor = document.createElement("div")
        const imgActor = document.createElement("div")
        const nameActor = document.createElement("span")
        const surnameActor = document.createElement("span")
        const btnDel = document.createElement("button")

        cardActor.className="cardActor";
        imgActor.className = "imgActor";
        nameActor.className = "nameActor";
        surnameActor.className = "surnameActor";
        btnDel.className = "btnDel"

        nameActor.textContent = item.nome;
        surnameActor.textContent = item.cognome;
        btnDel.textContent = "Cancella"

        cardActor.append(imgActor, nameActor, surnameActor, btnDel);
        containerCard.appendChild(cardActor);
        
        btnDel.addEventListener("click", (e) =>{
            DELETE(delete_url, id)
            console.log(id)
            location.reload();
        })
}}

const nameActor = document.querySelector(".nameActor")
const surnameActor = document.querySelector(".surnameActor")
const birthData = document.querySelector(".birthData")
const btnAdd = document.querySelector(".btnAdd")

btnAdd.addEventListener("submit", (e) =>{
    e.preventDefault();

    const data = {
        id: id+1,
        nome: element.nomeActor.value,
        cognome: element.cognomeActor.value,
        dataNascita: element.data_nascita.value
    }

    //METODO POST
    POST(add_url, data)
    .then(() => location.reload())

})
