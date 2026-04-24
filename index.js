const input = document.getElementById("userinput");
const button = document.getElementById("search");

//https://pokeapi.co/
const url = "https://pokeapi.co/api/v2/pokemon/";


async function Search() {
    try {
        const res = await fetch(url + input.value);
        if (!res.ok) throw new Error('HTTP ' + res.status);

        const data = res.json();
        console.log(data);

    } catch (e) {
        throw e;
    }

}

