function Vehiculo(marca, modelo, color, año, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.año = año;
    this.precio = precio;

    this.cambiarColor = function (nuevoColor) {
        this.color = nuevoColor;
    };

    this.cambiarPrecio = function (nuevoPrecio) {
        this.precio = nuevoPrecio;
    };

    this.cambiarModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
}

const vehiculo1 = new Vehiculo(
    prompt("Marca"),
    prompt("Modelo"),
    prompt("Color"),
    prompt("Año"),
    prompt("Precio")
);

const vehiculo2 = new Vehiculo(
    prompt("Marca"),
    prompt("Modelo"),
    prompt("Color"),
    prompt("Año"),
    prompt("Precio")
);

const vehiculo3 = new Vehiculo(
    prompt("Marca"),
    prompt("Modelo"),
    prompt("Color"),
    prompt("Año"),
    prompt("Precio")
);

vehiculo1.cambiarColor("Negro");
vehiculo2.cambiarPrecio(70000000);
vehiculo3.cambiarModelo("Nuevo Modelo");

console.log(vehiculo1);
console.log(vehiculo2);
console.log(vehiculo3);