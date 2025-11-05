"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno = /** @class */ (function () {
    function Alumno(nombre, edad, soltero) {
        this.nombre = nombre;
        this.edad = edad;
        this.soltero = soltero;
    }
    return Alumno;
}());
var primerAlumno = new Alumno("Manolo", 67, true);
var segundoAlumno = new Alumno("Ana", 43, false);
var Boton = /** @class */ (function () {
    function Boton(posicionX, posicionY, textoBoton) {
        if (posicionX % 1 !== 0 || posicionY % 1 !== 0) {
            throw new Error("Las posiciones X e Y deben ser números enteros");
        }
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.textoBoton = textoBoton;
    }
    return Boton;
}());
var primerBoton = new Boton(1, 2, "Primer");
var segundoBoton = new Boton(2, 2, "Segundo");
var holaBoton = new Boton(3, 2, "Hola");
var ViewPoint = /** @class */ (function () {
    function ViewPoint(anchura, altura, color) {
        if (anchura % 1 !== 0 || altura % 1 !== 0) {
            throw new Error("La anchura y la altura deben ser números enteros");
        }
        this.anchura = anchura;
        this.altura = altura;
        this.color = color;
    }
    return ViewPoint;
}());
var primerViewpoint = new ViewPoint(20, 20, "Red");
var segundoViewpoint = new ViewPoint(20, 20, "Blue");
