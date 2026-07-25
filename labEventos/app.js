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

// Paso 1, 3, 5 y 6: Pintar la fila
function pintarFila() {

    listaEspera.innerHTML = "";

    for (let i = 0; i < turnos.length; i++) {
        const turno = turnos[i];

        const li = document.createElement("li");
        li.classList.add("turno");

        // Paso 5: Guardar en cada li el código del turno y su módulo usando dataset
        li.dataset.codigo = turno.codigo;
        li.dataset.modulo = turno.modulo;

        // Paso 3: Revisar si la propiedad atendido es verdadera y agregar la clase
        if (turno.atendido === true) {
            li.classList.add("turno--atendido");
        }

        const spanCodigo = document.createElement("span");
        spanCodigo.classList.add("turno__codigo");
        spanCodigo.textContent = turno.codigo;

        const divDatos = document.createElement("div");
        divDatos.classList.add("turno__datos");

        const pNombre = document.createElement("p");
        pNombre.classList.add("turno__nombre");
        pNombre.textContent = turno.nombre;

        const pTramite = document.createElement("p");
        pTramite.classList.add("turno__tramite");
        pTramite.textContent = turno.tramite;

        divDatos.appendChild(pNombre);
        divDatos.appendChild(pTramite);

        const spanEstado = document.createElement("span");
        spanEstado.classList.add("turno__estado");

        if (turno.atendido === true) {
            spanEstado.textContent = "Atendido";
        } else {
            spanEstado.textContent = "En espera";
        }

        // Paso 6: Crear botón para cancelar
        const btnCancelar = document.createElement("button");
        btnCancelar.classList.add("turno__cancelar");
        btnCancelar.textContent = "Cancelar";
        btnCancelar.dataset.accion = "cancelar";

        // árbol DOM
        li.appendChild(spanCodigo);
        li.appendChild(divDatos);
        li.appendChild(spanEstado);
        li.appendChild(btnCancelar);

        listaEspera.appendChild(li);
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

// Paso 6: Delegación de eventos
listaEspera.addEventListener("click", function (evento) {
    if (evento.target.dataset.accion === "cancelar") {
        const liPadre = evento.target.parentElement;
        const codigoABorrar = liPadre.dataset.codigo;

        for (let i = 0; i < turnos.length; i++) {
            if (turnos[i].codigo === codigoABorrar) {
                turnos.splice(i, 1);
                break;
            }
        }

        pintarFila();
        aplicarBusqueda();
    }
});

// Paso 7: Búsqueda en vivo
function aplicarBusqueda() {
    const textoBuscado = buscador.value.toLowerCase();
    const elementosTurno = document.querySelectorAll(".turno");

    for (let i = 0; i < elementosTurno.length; i++) {
        const elemento = elementosTurno[i];
        const textoElemento = elemento.textContent.toLowerCase();

        if (textoElemento.includes(textoBuscado)) {
            elemento.classList.remove("turno--oculto");
        } else {
            elemento.classList.add("turno--oculto");
        }
    }
}

buscador.addEventListener("input", aplicarBusqueda);

pintarFila();