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
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    ghost: "#705898",
    ice: "#98d8d8"

}
fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
.then((res) => res.json())
.then ((pokemon) => {
    pokemon.results.forEach((item) => fetch(item.url)
    .then((res2) => res2.json()
    .then((pokemon) => pokemonCardCreate(pokemon))))});

    
    
    const bodyEl = document.getElementsByName ("body")
    console.log(bodyEl)
    
    const container= document.querySelector(".container")
    console.log(container)
    
    const pokemonCardCreate = (data) => {
        console.log(data)
        
        const cardEl = document.createElement("div");
        cardEl.className = "card";

        
        //console.log(data.types[0].type.name)
        // console.log(colors.data.types[0].type.name)
        
        const coloration = data.types[0].type.name
        console.log(colors[coloration])
        cardEl.style.backgroundColor = colors[coloration]

       
        
        
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.sprites.front_default);
        imgEl.setAttribute("alt", "image");
        
        const idEl = document.createElement("p");
        idEl.className = "id-pokemon";
        idEl.textContent = ` #${data.id}` ;
        
        const nameEl = document.createElement("h1");
        nameEl.textContent = data.name;
        
        const typeEl = document.createElement("p");
        typeEl.textContent = `${data.types[0].type.name}`;
        
        
    cardEl.append(imgEl, idEl, nameEl, typeEl);
    container.appendChild(cardEl);
};





