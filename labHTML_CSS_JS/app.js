let contador = 0;

const textoContador = document.getElementById("numContador");
const btnIncrementar = document.getElementById("btnsSumar");
const btnDecrementar = document.getElementById("btnRestar");

function actualizarContador(){
    textoContador.textContent = contador;
}

btnIncrementar.addEventListener("click", function(){
    contador++;
    actualizarContador();
    }
);

btnDecrementar.addEventListener("click", function(){
    contador--;
    actualizarContador();
    }
);