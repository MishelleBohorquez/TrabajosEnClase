function Computador(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
}

const computador1 = new Computador("Lenovo", "Intel i5", 8, 2500000);
const computador2 = new Computador("HP", "Ryzen 5", 16, 3200000);
const computador3 = new Computador("Dell", "Intel i7", 32, 4500000);

console.log(computador1);
console.log(computador2);
console.log(computador3);