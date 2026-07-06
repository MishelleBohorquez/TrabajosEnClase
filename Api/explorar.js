async function explorar() {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    console.log("Status:", respuesta.status);
    const datos = await respuesta.json();
    console.log(datos);

    console.log("\nTIPOS");
    for (let t of datos.types) {
        console.log(t.type.name);
    }

    console.log("\nSTATS");
    for (let s of datos.stats) {
        console.log(s.stat.name, s.base_stat);
    }

    console.log("\nHABILIDADES");
    for (let a of datos.abilities) {
        console.log(a.ability.name);
    }
}

explorar();