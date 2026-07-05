let ventas = [120000 , 95000 , 150000 , 80000 , 200000];
let suma = 0;

for (let i = 0; i < ventas.length; i++) {
    let anterior = suma;
    suma = suma + ventas[i];
    console.log(anterior, " +" , ventas[i] , "=" ,suma);
}
let promedio = suma / ventas.length;
console.log("El promedio de ventas es: " + promedio);