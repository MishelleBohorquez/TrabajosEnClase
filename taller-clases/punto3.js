class UsuarioNequi {

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    enviar(monto) {
        if (monto > this.saldo) {
            return "Saldo insuficiente";
        }

        this.saldo -= monto;
        return `${this.nombre} tiene un saldo de ${this.saldo}`;
    }

}

class ComercioNequi extends UsuarioNequi {

    constructor(nombre, saldo, comision) {
        super(nombre, saldo);
        this.comision = comision;
    }

    enviar(monto) {
        const total = monto + (monto * this.comision / 100);
        return super.enviar(total);
    }

}

const usuario = new UsuarioNequi("Mishelle", 100000);

const comercio = new ComercioNequi("Comercio", 100000, 3);

console.log(usuario.enviar(10000));
console.log(comercio.enviar(10000));