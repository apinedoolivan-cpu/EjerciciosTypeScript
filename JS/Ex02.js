"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cuadrado = /** @class */ (function () {
    function Cuadrado(posicionX, posicionY, longitud) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.longitud = longitud;
    }
    Cuadrado.prototype.superficie = function () {
        var supercifice = this.longitud * this.longitud;
        return "La superficie del cuadrado es ".concat(supercifice);
    };
    Cuadrado.prototype.perimetro = function () {
        var perimetro = this.longitud * 4;
        return "El perimetro del cuadrado es ".concat(perimetro);
    };
    return Cuadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(posicionX, posicionY, radio) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
        this.radio = radio;
    }
    Circulo.prototype.superficie = function () {
        var supercifice = Math.PI * Math.pow(this.radio, 2);
        return "La superficie del circulo es ".concat(supercifice);
    };
    Circulo.prototype.perimetro = function () {
        var perimetro = 2 * Math.PI * this.radio;
        return "El perimetro del circulo es ".concat(perimetro);
    };
    return Circulo;
}());
var cuadrado1 = new Cuadrado(20, 20, 20);
var cuadrado2 = new Cuadrado(30, 30, 30);
cuadrado1.perimetro();
cuadrado2.perimetro();
cuadrado1.superficie();
cuadrado1.superficie();
var circulo1 = new Circulo(20, 20, 20);
var circulo2 = new Circulo(30, 30, 30);
circulo1.perimetro();
circulo1.perimetro();
circulo2.superficie();
circulo2.superficie();
