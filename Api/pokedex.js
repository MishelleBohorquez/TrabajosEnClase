async function buscarPokemon(nombre) {

    const url = `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`;
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        console.log("Error:", respuesta.status);
        return null;
    }
    return await respuesta.json();

}

function mostrarFicha(datos) {

    if (!datos) {
        console.log("No hay datos.");
        return;
    }

    console.log(datos.name.toUpperCase());
    console.log("Pokédex:", datos.id);

    let tipos = [];

    for (let t of datos.types) {
        tipos.push(t.type.name);
    }

    console.log("Tipos:", tipos.join(" / "));
    console.log("Altura:", datos.height * 10, "cm");
    console.log("Peso:", datos.weight / 10, "kg");

    console.log("\nSTATS");

    for (let s of datos.stats) {
        console.log(s.stat.name + ": " + s.base_stat);
    }

    console.log("\nHABILIDADES");

    for (let a of datos.abilities) {
        let texto = a.ability.name;
        if (a.is_hidden) {
            texto += " (oculta)";
        }
        console.log(texto);
    }

}

function obtenerStat(datos, nombreStat) {

    for (let stat of datos.stats) {
        if (stat.stat.name === nombreStat) {
            return stat.base_stat;
        }
    }
    return null;

}



async function prueba() {

    const equipo = [
        "pikachu",
        "charizard",
        "snorlax",
        "machamp",
        "bulbasaur",
        "gengar"
    ];

    const ganadorAttack = await pokemonMasFuerte(equipo, "attack");
    await pokemonMasFuerte(equipo, "defense");
    const pokemon = await buscarPokemon(ganadorAttack);
    mostrarFicha(pokemon);

}

prueba();