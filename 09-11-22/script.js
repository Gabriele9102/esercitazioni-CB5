const bodyEl = document.getElementsByName ("body")
console.log(bodyEl)

const container= document.querySelector(".container")
console.log(container)

const colors = {
electric: '#FCF7DE',
water: '#DEF3FD',
ground: '#f4e7da',
rock: '#d5d5d4',
fairy: '#fceaff',
poison: '#98d7a5',
bug: '#f8d5a3',
dragon: '#97b3e6',
psychic: '#eaeda1',
flying: '#F5F5F5',
fighting: '#E6E0D4',
normal: '#F5F5F5',
fire: '#FDDFDF',
grass: '#DEFDE0',
ghost: '#705898',
ice: '#98d8d8'
}

const pokemonCardCreate = (data) => {
    
    const cardEl = document.createElement("div");
    cardEl.className = "card";
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
    cardEl.append(imgEl, idEl, nameEl);

    let gradientColors = "";
    
    // const typeEl = document.createElement("p");
    // typeEl.className = "type";
    // typeEl.textContent ="Type: " + `${data.types[0].type.name}` 
    data.types.map((type, i) => {
      if(data.types.lenght = 1) {

        gradientColors = gradientColors.concat( colors[type.type.name] +  "," +colors[type.type.name ] +  ",");

      } else {
        gradientColors = gradientColors.concat( colors[type.type.name] +  ",");
      }
    // cardEl.classList.add(`bg-${type.type.name}`);
    const typeEl = document.createElement("p");
    typeEl.className = "type";
    typeEl.textContent ="Type: " + `${type.type.name}` 
  cardEl.append(typeEl)})
  
cardEl.style.backgroundImage = `linear-gradient(to bottom right, ${gradientColors.slice(0, -1)} )`
console.log(gradientColors.slice(0, -1))
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
 


    




