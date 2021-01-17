const search = () =>{
    let pokeName = document.querySelector("#poke-name");
    if(pokeName !== ""){
        pokeName.innerHTML = "";
    }
    let counterId = document.querySelector("#counter");
    if(counterId !== ""){
        counterId.innerHTML = "";
    }
    let index = document.querySelector("#search-input").value.toLowerCase();
    let button = document.querySelector("#search-button");
    button.classList.toggle("pressed");
    if(index == "" || index < 1 || index > 300){
        ShowErrorMessage();
    } else {
        getPoke();
    }
}

const ShowErrorMessage = () =>{
    let nameDisplay = document.querySelector("#name-display");
    let noMatch = document.createElement("p");
    noMatch.innerHTML = "There's no match. Try again!"
    nameDisplay.appendChild(noMatch)
    setTimeout(function(){ 
        noMatch.classList.add("hidden"); }, 2000);
}

const getPoke = () =>{
    let index = document.querySelector("#search-input").value.toLowerCase();
    let baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    let nameDisplay = document.querySelector("#name-display");
    let pokeName = document.querySelector("#poke-name");
    pokeName.classList.add("name");
    let pokeImage = document.querySelector("#poke-image");
    let counterId = document.querySelector("#counter");
    let counter = document.createElement("p");
    counter.classList.add("counter-id");
    axios.get(baseUrl + index)
    .then(res => {
        let id = res.data.id;
        pokeName.innerHTML = res.data.name;
        nameDisplay.appendChild(pokeName);
        pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        pokeImage.classList.add("img");
        counter.innerHTML = id;
        counterId.appendChild(counter);
    });
}

//** normal: '#A8A77A',
//	fire: '#EE8130',
//	water: '#6390F0',
//	electric: '#F7D02C',
/*	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
    fairy: '#D685AD',
*/