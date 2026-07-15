let contador = 0;

const textoContador = document.getElementById("numContador");
const btnIncrementar = document.getElementById("btnSumar");
const btnDecrementar = document.getElementById("btnRestar");

function actualizarContador(){
    textoContador.textContent = contador;
}

btnSumar.addEventListener("click", function(){
    contador++;
    actualizarContador();
    }
);

btnRestar.addEventListener("click", function(){
    contador--;
    actualizarContador();
    }
);