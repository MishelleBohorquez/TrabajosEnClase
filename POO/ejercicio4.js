function Libro(titulo, autor, paginas, categoria) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.categoria = categoria;
    this.prestado = false;

    this.prestar = function () {
        if (this.prestado == false) {
            this.prestado = true;
            console.log("Libro prestado.");
        } else {
            console.log("El libro ya está prestado.");
        }
    };

    this.devolver = function () {
        if (this.prestado === true) {
            this.prestado = false;
            console.log("Libro devuelto.");
        } else {
            console.log("El libro no estaba prestado.");
        }
    };
}

const libro1 = new Libro("JavaScript", "Autor", 250, "Programación");

libro1.prestar();
libro1.prestar();

libro1.devolver();
libro1.devolver();