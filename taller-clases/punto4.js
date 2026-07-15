class Vehiculo {

    constructor(placa, pasajeros) {
        this.placa = placa;
        this.pasajeros = pasajeros;
    }

    tarifa() {
        return 2950;
    }

    reporte() {
        return `Placa: ${this.placa}, Pasajeros: ${this.pasajeros}, Tarifa: ${this.tarifa()}`;
    }

}

class Alimentador extends Vehiculo {

    tarifa() {
        return 0;
    }

}

class BusDual extends Vehiculo {

    constructor(placa, pasajeros, esElectrico) {
        super(placa, pasajeros);
        this.esElectrico = esElectrico;
    }

    tarifa() {
        if (this.esElectrico) {
            return 2500;
        }
        return 3200;
    }

}

const flota = [
    new Vehiculo("ABC123", 40),
    new Alimentador("DEF456", 30),
    new BusDual("GHI789", 50, true)
];

for (const vehiculo of flota) {
    console.log(vehiculo.reporte());
}