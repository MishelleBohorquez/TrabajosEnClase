// clase carrito (Usa prdcuto y utilidades)

const { formatearPrecio, calcularDescuento } = require("./utilidades");

class Carrito {
    constructor(usuario) {
        this.usuario = usuario;
        this.items = [];
    }

    agregar(producto, cantidad) {
        if (!producto.hayStock(cantidad)) {
            return "Sin stock";
        }

        this.items.push({
            producto: producto,
            cantidad: cantidad
        });

        return "Producto agregado";
    }

    subtotal() {
        let suma = 0;

        for (let item of this.items) {
            suma = suma + (item.producto.precio * item.cantidad);
        }

        return suma;
    }

    total() {
        let subtotal = this.subtotal();

        if (this.usuario.esVip) {
            return calcularDescuento(subtotal, 10);
        }

        return subtotal;
    }

    recibo() {
        let saludo = this.usuario.saludo();
        let subtotal = this.subtotal();
        let total = this.total();

        let subtotalFormateado = formatearPrecio(subtotal);
        let totalFormateado = formatearPrecio(total);

        return `${saludo}
Subtotal: ${subtotalFormateado}
Total: ${totalFormateado}`;
    }
}

module.exports = Carrito;