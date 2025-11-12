abstract class Figura
{
    readonly x: number;
    readonly y: number;
    abstract damePerimetro():number;
    abstract dameSuperficie():number;
    
    constructor(x: number, y: number)
    {
        if (x < 0)
        {
            this.x = 0;
        }
        else
        {
            this.x = x;
        }
        if (y < 0)
        {
            this.y = 0;
        }
        else
        {
            this.y = y;
        }
    }
}
class Cuadrado extends Figura{

    longitud: number;

    constructor(posicionX: number, posicionY: number, longitud: number){
        super(posicionX,posicionY)
        this.longitud = longitud;
    }
    dameSuperficie():number{   
        return this.longitud * this.longitud;
    }
    damePerimetro():number{ 
        return this.longitud * 4
    }
}

class Circulo extends Figura{ 
    radio: number;

    constructor(posicionX: number, posicionY: number, radio: number){
        super(posicionX,posicionY)
        this.radio = radio;
    }
    dameSuperficie():number{
        return Math.PI * Math.pow(this.radio, 2)
    }
    damePerimetro():number{
        return  2 * Math.PI * this.radio;
    }
}

class Triangulo extends Figura{
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(posicionX: number, posicionY: number, lado1: number, lado2: number, lado3: number){
        super(posicionX,posicionY);
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    damePerimetro():number{
        return this.lado1 + this.lado2 + this.lado3;
    }
    dameSuperficie():number{
        const semiperimetro = this.damePerimetro() / 2;
        const superficie = 
        Math.sqrt(semiperimetro * (semiperimetro - this.lado1) * (semiperimetro - this.lado2) * (semiperimetro - this.lado3));

        if (isNaN(superficie)) {
            throw new Error("Los lados introducidos no forman un triángulo válido");
        }
        return superficie;
    }
}

class Rectangulo extends Figura {
    base: number;
    altura: number;
    
    constructor(posicionX: number, posicionY: number, base: number, altura: number){
        super(posicionX, posicionY);
        this.base = base;
        this.altura = altura;
    }
    damePerimetro():number{
        return 2 * (this.base + this.altura);
    }
    dameSuperficie():number{
        return this.base * this.altura;
    }
}

abstract class Persona {
    readonly nombre: string;
    edad: number;
    abstract dameSueldo():number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
}   

class Ejecutivo extends Persona{
    
    dameSueldo(): number {
        return this.edad*100;
    }
}
class Secretario extends Persona{
    
    dameSueldo(): number {
        return this.edad*50
    }
}

class Aprendiz extends Persona{
    
    dameSueldo(): number {
        return this.edad*10;
    }
}

const personas: Persona[] = [
    new Ejecutivo("Laura", 30),
    new Ejecutivo("Miguel", 20),
    new Secretario("Sofía", 20),
    new Secretario("Andrés", 22),
    new Aprendiz("Valentina", 22),
    new Aprendiz("Carlos", 24)
];

const sueldoTotal = personas.reduce((total, persona) => total + persona.dameSueldo(), 0);
const sueldoPromedio = sueldoTotal / personas.length;

console.log("Sueldo total : ", sueldoTotal);
console.log("Sueldo promedio:", sueldoPromedio);

const Arreglo: Figura [] = [new Cuadrado(4,5,6),new Circulo(3,3,4),new Triangulo(2,2,3,4,5),
    new Rectangulo(5,6,3,4)];
    Arreglo.forEach(element => {
    console.log(element.damePerimetro());
    console.log(element.dameSuperficie());
});

export{}