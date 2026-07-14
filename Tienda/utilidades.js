// funciones de formato, validación y descuento

// formatearPrecio

function formatearPrecio(precio) {
    return precio.toLocaleString("es-CO");
}

function esEmailValido(email) {
    return email.includes("@") && email.includes(".");
}

function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 100);
}

module.exports = {
    formatearPrecio,
    esEmailValido,
    calcularDescuento
};