function Estudiante(nombre, materia, nota) {
    this.nombre = nombre;
    this.materia = materia;
    this.nota = nota;
    this.aprobado = this.nota >= 3.0;

    this.mostrarResultado = function () {
        if (this.aprobado) {
            console.log(this.nombre + " aprobó.");
        } else {
            console.log(this.nombre + " reprobó.");
        }
    };
}

const estudiante1 = new Estudiante("Dayan", "JavaScript", 4.5);
const estudiante2 = new Estudiante("Mishelle", "JavaScript", 2.8);
const estudiante3 = new Estudiante("Bohorquez", "JavaScript", 3.2);
const estudiante4 = new Estudiante("Rojas", "JavaScript", 1.5);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();