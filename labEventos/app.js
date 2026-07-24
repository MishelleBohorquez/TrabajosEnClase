// Paso 1: El dato antes que la pantalla
let turnos = [
    { codigo: "A-014", nombre: "Mishelle Bohorquez", tramite: "Medicina General", modulo: "Módulo 1", atendido: false },
    { codigo: "A-015", nombre: "Dayan Rojas", tramite: "Odontología", modulo: "Módulo 2", atendido: false },
    { codigo: "A-016", nombre: "Milena Perez", tramite: "Laboratorio Clínico", modulo: "Módulo 3", atendido: false },
    { codigo: "A-017", nombre: "Alejandra Martinez", tramite: "Vacunación", modulo: "Módulo 1", atendido: false },
    { codigo: "A-018", nombre: "Natalia Hernández", tramite: "Optometría", modulo: "Módulo 4", atendido: false },
    { codigo: "A-019", nombre: "Juan Lopez", tramite: "Entrega de Medicamentos", modulo: "Módulo 2", atendido: false }
];

const visornumero = document.getElementById("visornumero");
const visorModulo = document.getElementById("visorModulo");
const buscador = document.getElementById("buscador");
const contadorFila = document.getElementById("contadorFila");
const listaEspera = document.getElementById("listaEspera");
const btnLlamar = document.getElementById("btnLlamar");
const mensajeVacio = document.getElementById("mensajeVacio");

// Paso 4: Contar lo que se ve
function actualizarContador() {
    const enEspera = document.querySelectorAll(".turno:not(.turno--atendido)");
    contadorFila.textContent = enEspera.length;
}

// Paso 1 y 3
function pintarFila() {
    
    listaEspera.innerHTML = "";

    for (let i = 0; i < turnos.length; i++) {
        const turno = turnos[i];

        const li = document.createElement("li");
        li.classList.add("turno");


        // Paso 3: Revisar si la propiedad atendido es verdadera y agregar la clase
        if (turno.atendido === true) {
            li.classList.add("turno--atendido");
        }

        const spanCodigo = document.createElement("span");
        spanCodigo.classList.add("turno__codigo");
        spanCodigo.textContent = turno.codigo;

        const divDatos = document.createElement("div");
        divDatos.classList.add("turno__datos");

    }

    actualizarContador();
}

// Paso 2: Llamar al siguiente
function llamarSiguiente() {
    let turnoEncontrado = null;

    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i].atendido === false) {
            turnoEncontrado = turnos[i];
            break;
        }
    }

    if (turnoEncontrado !== null) {
        turnoEncontrado.atendido = true;
        visornumero.textContent = turnoEncontrado.codigo;
        visorModulo.textContent = turnoEncontrado.modulo;
    }

    pintarFila();
}

btnLlamar.addEventListener("click", llamarSiguiente);