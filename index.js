const input = document.getElementById("userinput");
const button = document.getElementById("search");

const pokeName = document.getElementById("pokeName");
const pokeFoto = document.getElementById("pokeFoto");
const pokeTypes = document.getElementById("pokeTypes");
const weight = document.getElementById("weight");
const height = document.getElementById("height");

//https://pokeapi.co/
const url = "https://pokeapi.co/api/v2/pokemon/";


async function Search() {
    try {
        const res = await fetch(url + input.value);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();

        pokeName.textContent= data.name;
        pokeFoto.src= data.sprites.front_default;
        pokeTypes.textContent= data.types[0] +"/"+ data.types[1];
        weight.textContent= data.weight;
        height.textContent= data.height;

    } catch (e) {
        throw e;
    }

}

