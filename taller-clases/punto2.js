class Pelicula {

    constructor(titulo, duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.precioBase = 15000;
    }

    calcularPrecio() {
        return this.precioBase;
    }

    descripcion() {
        return `${this.titulo} (${this.duracion} min)`;
    }

}

class PeliculaVIP extends Pelicula {

    constructor(titulo, duracion) {
        super(titulo, duracion);
    }

    calcularPrecio() {
        return this.precioBase + 5000;
    }

}

const peliculaNormal = new Pelicula("Al otro lado del jardín", 108);

const peliculaVIP = new PeliculaVIP("Juego de gemelas", 134);

console.log(peliculaNormal.descripcion());
console.log(peliculaNormal.calcularPrecio());

console.log(peliculaVIP.descripcion());
console.log(peliculaVIP.calcularPrecio());