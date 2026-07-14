// clase producto (define un articulo del catálogo)

class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    hayStock(cantidad) {
        return this.stock >= cantidad;
    }

    ficha() {
        return "Nombre: " + this.nombre + ", Precio: " + this.precio + ", Categoría: " + this.categoria + ", Stock: " + this.stock;
    }
}

module.exports = Producto;