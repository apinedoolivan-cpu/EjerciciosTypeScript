class Alumno {
    nombre: string;
    edad: number;
    soltero: boolean;

    constructor(nombre: string, edad: number, soltero : boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.soltero = soltero;
    }
}
const primerAlumno = new Alumno("Manolo", 67,true);
const segundoAlumno = new Alumno("Ana", 43, false);

class Boton {
    posicionX: number;
    posicionY: number;
    textoBoton: string;

    constructor(posicionX: number, posicionY: number, textoBoton: string) {
        if (posicionX % 1 !== 0 || posicionY % 1 !== 0) {
            throw new Error("Las posiciones X e Y deben ser números enteros");
        }

        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.textoBoton = textoBoton;
    }
}

const primerBoton = new Boton(1, 2, "Primer");
const segundoBoton = new Boton(2, 2, "Segundo");
const holaBoton = new Boton(3, 2, "Hola");

class ViewPoint {
    anchura: number;
    altura: number;
    color: string;

    constructor(anchura: number, altura: number, color: string) {
        if (anchura % 1 !== 0 || altura % 1 !== 0) {
            throw new Error("La anchura y la altura deben ser números enteros");
        }

        this.anchura = anchura;
        this.altura = altura;
        this.color = color;
    }
}

const primerViewpoint = new ViewPoint(20,20,"Red");
const segundoViewpoint = new ViewPoint(20,20, "Blue");

export{}