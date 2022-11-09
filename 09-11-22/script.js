const bodyEl = document.getElementsByName ("body")
console.log(bodyEl)

const container= document.querySelector(".container")
console.log(container)

const pokemonCardCreate = (data) => {
    console.log(data.types[0].type.name)
    
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.classList.add(`bg-${data.types[0].type.name}`)

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", data.sprites.front_default);
    imgEl.setAttribute("alt", "image");
    
    const idEl = document.createElement("p");
    idEl.textContent ="#" + getId(data.id)
    idEl.className = "id-pokemon"
    
    function getId(idEl) {
      if (!idEl) return null;
      if(idEl < 10) {return `00${idEl}`}
      else if (idEl < 100) {return `0${idEl}`}
      return idEl
    }
    
    const nameEl = document.createElement("h2");
    nameEl.textContent = data.name;
    
    const typeEl = document.createElement("p");
    typeEl.className = "type";
    typeEl.textContent ="Type: " + `${data.types[0].type.name}` 
    
    
cardEl.append(imgEl, idEl, nameEl, typeEl);
container.appendChild(cardEl);
};

const urlArray = [];

for (let i = 1; i <= 150; i++) {
  urlArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

let request = urlArray.map((url) =>{
  return fetch(url).then((res)=> res.json());
})

Promise.all(request).then((res) => res.map((r) => pokemonCardCreate(r)));
 


    




