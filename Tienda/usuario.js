// clase usuario (el cliente que compra)

class Usuario {
    constructor(nombre, email, esVip) {
        this.nombre = nombre;
        this.email = email;
        this.esVip = esVip;
    }

    saludo() {
        return "Hola " + this.nombre;
    }
}

module.exports = Usuario;