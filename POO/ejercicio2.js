function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function () {
        return "Nombre: " + this.nombre + ", Especie: " + this.especie + ", Edad: " + this.edad + ", Peso: " + this.peso;
    };
}

const mascota1 = new Mascota("Luna", "Perro", 3, 18);
const mascota2 = new Mascota("Milo", "Gato", 2, 5);
const mascota3 = new Mascota("Max", "Perro", 6, 20);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());