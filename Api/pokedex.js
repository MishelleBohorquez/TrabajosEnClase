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

async function compararPokemon(nombre1, nombre2, stat) {

    const pokemon1 = await buscarPokemon(nombre1);
    const pokemon2 = await buscarPokemon(nombre2);

    if (pokemon1 == null || pokemon2 == null) {
        return;
    }

    const valor1 = obtenerStat(pokemon1, stat);
    const valor2 = obtenerStat(pokemon2, stat);

    if (valor1 == null || valor2 == null) {
        console.log("La stat no existe.");
        return;
    }

    console.log("\nComparando", stat);

    if (valor1 > valor2) {
        console.log(pokemon1.name, "gana.");
    } else if (valor2 > valor1) {
        console.log(pokemon2.name, "gana.");
    } else {
        console.log("Empate.");
    }

}

async function pokemonMasFuerte(listaNombres, stat) {

    let mejorNombre = "";
    let mejorValor = -1;

    for (let nombre of listaNombres) {
        const pokemon = await buscarPokemon(nombre);
        if (pokemon == null) {
            continue;
        }

        const valor = obtenerStat(pokemon, stat);
        if (valor == null) {
            continue;
        }

        if (valor > mejorValor) {
            mejorValor = valor;
            mejorNombre = pokemon.name;
        }

    }

    console.log("Ganador en", stat + ":", mejorNombre);
    return mejorNombre;

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