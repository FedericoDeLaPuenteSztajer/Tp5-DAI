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

        pokeName.textContent = (input.value.toLowerCase()).replace(data.name[0], data.name[0].toUpperCase());
        pokeFoto.src = data.sprites.front_default;

        pokeTypes.textContent = `Tipos: ${data.types.map(t => t.type.name).join(" / ")}`;
        weight.textContent = `Peso: ${data.weight}`;
        height.textContent = `Altura: ${data.height}`;

    } catch (e) {
        pokeName.textContent = "Pokemon no Enconctrado";
        pokeFoto.src = "";
        pokeTypes.textContent = "";
        weight.textContent = "";
        height.textContent = "";
    }

}

