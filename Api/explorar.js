async function pokemon() {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
  const datos = await respuesta.json();
  console.log(respuesta.status);
//   console.log(datos);

  console.log("--- TIPOS ---");
  for (let t of datos.types) {
    console.log(t.type.name);
  }

  console.log("\n--- STATS ---");
  for (let s of datos.stats) {
    console.log(s.stat.name + ": " + s.base_stat);
  }

  console.log("\n--- HABILIDADES ---");
  for (let a of datos.abilities) {
    console.log(a.ability.name);
  }
}

pokemon();

// PARTE 2
async function buscarPokemon(){

}
buscarPokemon()

// PARTE 3
async function mostrarFicha(){

}
buscarPokemon()

// PARTE 4
async function compararPokemon(){

}
compararPokemon()

// PARTE 5
async function pokemonMasFuerte(){

}
pokemonMasFuerte()