class Alumno {
    readonly nombre: string;
    edad: number;
    soltero: boolean;

    constructor(nombre: string = "", edad: number = 0, soltero : boolean = true){
        this.nombre = nombre;
        this.edad = edad;
        this.soltero = soltero;
    }
}
const primerAlumno = new Alumno("Manolo", 67,true);
console.log(primerAlumno);
const segundoAlumno = new Alumno("Ana", 43, false);
console.log(segundoAlumno);
const tercerAlumno = new Alumno();
console.log(tercerAlumno);

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
console.log(primerBoton);
const segundoBoton = new Boton(2, 2, "Segundo");
console.log(segundoBoton);
const holaBoton = new Boton(3, 2, "Hola");
console.log(holaBoton);

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
console.log(primerViewpoint);
const segundoViewpoint = new ViewPoint(20,20, "Blue");
console.log(segundoViewpoint);

export{}