const prompt = require("prompt-sync")();

// Menú del resturante
let menu = [
    {
        nombre:"Ajiaco",
        precio:35000,
        categoria:"Fuerte",
        disponible: false
    },
    {
        nombre:"Brownie con helado",
        precio:12000,
        categoria:"Postre",
        disponible: true
    },
    {
        nombre:"Soda italiana",
        precio:15000,
        categoria:"Bebida",
        disponible:true
    },
    {
        nombre:"Sushi",
        precio:30000,
        categoria:"Fuerte",
        disponible:true
    }
];

// Leer el segundo plato
// console.log(menu[1])


// RETO 1
console.log("------ RETO 1 ------");
function mostrarMenu(menu){
    for (let i = 0; i < menu.length; i++){
        console.log("\nNombre: " + menu[i].nombre ,"\nPrecio: " + menu[i].precio );
    }
}
mostrarMenu(menu);


// RETO 2
console.log("\n------ RETO 2 ------");
function soloDisponibles(menu){

    let disponibles = [];
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].disponible == true) {
            disponibles.push(menu[i]);
        }
    }
    return disponibles; 

}

let menuDisponible = soloDisponibles(menu);
mostrarMenu(menuDisponible);


// RETO 3
console.log("\n------ RETO 3 ------");
let pedido = [];

pedido.push(menu[1]);
pedido.push(menu[2]);
pedido.push(menu[3]);

console.log("PEDIDO");
mostrarMenu(pedido);

let pedidoQuitar = pedido.pop();

console.log("\nQuitó: "+ pedidoQuitar.nombre);

console.log("\nPedido: ");
mostrarMenu(pedido);


// RETO 4
console.log("\n------ RETO 4 ------");
function calcularCuenta(pedido) {

    let suma = 0;
    for (let i = 0; i < pedido.length; i++) {
        suma += pedido[i].precio;
    }

    let iva = suma * 0.19;
    let total = suma + iva;

    console.log("Subtotal: " + suma);
    console.log("IVA: " + iva);
    console.log("Total con IVA: " + total);

    return total;

}

let totalCuenta = calcularCuenta(pedido);


// RETO 5
console.log("\n------ RETO 5 ------");
console.log("MENÚ");
for (let i = 0; i < menu.length; i++) {
    console.log(i + 1 + "." + menu[i].nombre + " - " + menu[i].precio);
}

let opcion = Number(prompt("Seleccione el número del plato: "));

let plato = menu[opcion - 1];
pedido.push(plato);

console.log("Pedido:");
mostrarMenu(pedido);

let total = calcularCuenta(pedido);
console.log("Total con IVA: " + total);