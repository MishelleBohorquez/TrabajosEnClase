/* PARTE 1: Los datos del cliente
    Declaré el nombre como constante porque es el mismo cliente, puede cmbiar de domicilio
    e incluso unirse a Rappi Prime, pero su nombre siempre es el mismo.
    Aquí utilcé un OBJECT porque son datos diferentes que pertenecen a un mismo cliente
*/
console.log("\nPARTE 1\n");

const nombre = "Mishelle";
let cliente = {
    nombre,
    ciudad: "Fusagasugá",
    rappiPrime: false
}
console.log(cliente.nombre + ", el destino de tú pedido es en" , cliente.ciudad , "\n¡Tienes descuento si eres parte de Rappi Prime!. \nEstado de convenio:" , cliente.rappiPrime);

/* PARTE 2: Los productos del pedido
    Aquí se utiliza un ARRAY porque pertenecen a una sola categoria "Productos"
*/
console.log("\nPARTE 2\n");

let listaPedido = ["Leche", "Huevos", "Panela"];
console.log("Tus productos son:" , listaPedido);
console.log("Tu primer producto es: " + listaPedido[0]);

listaPedido.push("Brownie con helado"); // Añade
console.log(listaPedido);

listaPedido.pop(); // Elimina
console.log(listaPedido);

console.log(listaPedido.length); // Cuenta

/* PARTE 3: El pedido completo como una ficha
*/
console.log("\nPARTE 3\n");

let pedido = {
    nombre,
    ciudad: cliente.ciudad,
    productos: listaPedido,
    estado: "En preparación"
}

// Pedido completo
console.log("Datos del pedido:");
console.log(pedido);

// Nombre del cliente
console.log("Nombre: " + pedido.nombre);

// Cambio de esado
console.log(pedido.estado = "En camino");
console.log("Datos del pedido:");
console.log(pedido);

// Primer producto
console.log("Tu primer producto es:" , pedido.productos[0])

/* PARTE 4: El cobro
*/
console.log("\nPARTE 4\n");

let subtotal = Number("20000");
const propina =  subtotal * 0.10;
let domicilio = 3500;
let total = subtotal + domicilio + propina;

console.log("Subtotal: " + subtotal);
console.log("Domicilio: " + domicilio);
console.log("Propina: " + propina);
console.log("Total a pagar por el pedido de " + nombre + ": $" + (total));