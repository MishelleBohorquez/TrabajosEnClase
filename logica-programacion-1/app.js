let num1 = Number(prompt("Ingresa el primer número"));
let num2 = Number(prompt("Ingresa el segundo número"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error, debes escribir solo números.");
} else {
    if (num1 > num2) {
        console.log("El número mayor es " + num1);
    }
    if (num2 > num1) {
        console.log("El número mayor es " + num2);
    }
    if (num1 == num2) {
        console.log("Los dos números son iguales.");
    }
}