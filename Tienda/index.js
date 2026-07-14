// Punto de entrada, solo coordina

const Producto = require("./producto");
const Usuario = require("./usuario");
const Carrito = require("./carrito");

const usuario = new Usuario("Mishelle", "mishelle@gmail.com", true);

const producto1 = new Producto("Mouse", 211000, "Tecnología", 10);
const producto2 = new Producto("Teclado", 450000, "Tecnología", 5);

const carrito = new Carrito(usuario);

carrito.agregar(producto1, 2);
carrito.agregar(producto2, 1);

console.log(carrito.recibo());