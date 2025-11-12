abstract class Persona {
    readonly nombre: string;
    edad:number;
    abstract dameNombre():string

    constructor(nombre: string, edad: number){
        if(edad < 0) this.edad = 0;
        else this.edad = edad; 

        this.nombre = nombre;
    }
    dameEdad():number{
        return this.edad;
    }
}
interface Repuesto {
    damePrecio():number;
    dameIdentificador():string;
}
interface Volumen {
    dameVolumen():number;
}
class Alumno extends Persona{
    id: string;
    estudios: boolean;

    constructor(nombre: string, edad: number, id: string, estudios: boolean){
        super(nombre, edad);
        if (id.length == 0) this.id = "No identificado";
        else this.id = id;

        this.estudios = estudios;
    }

    dameNombre(): string {
        return "Este Alumno se llama: "+this.nombre;
    }
}
class Profesor extends Persona{
    
    estudios: string;

    constructor(nombre: string, edad: number, estudios: string){
        super(nombre, edad);
        this.estudios = estudios;
    }
    dameNombre(): string {
        return "Este profesor se llama: "+this.nombre;
    }
}
class Coordinador extends Profesor{
    turno: string;

    constructor(nombre: string, edad: number, estudios: string, turno: string){
        super(nombre, edad, estudios)
        this.turno = turno;
    }
    dameNombre(): string {
        return "Este cordinador se llama: "+this.nombre;
    }
}
class Rueda implements Repuesto, Volumen{
    dameVolumen(): number {
        return 100;
    }

    damePrecio(): number {
        return 60;
    }
    dameIdentificador(): string {
        return `Soy una rueda`
    }
}
class Retrovisor implements Repuesto, Volumen{
    dameVolumen(): number {
        return 20;
    }

    damePrecio(): number {
        return 50;
    }
    dameIdentificador(): string {
        return `Soy un retrovisor`
    }
}
class Luz implements Repuesto, Volumen{
    dameVolumen(): number {
        return 20;
    }
    damePrecio(): number {
        return 60;
    }
    dameIdentificador(): string {
        return `Soy una luz de cruce`
    }
}
class Pegatina implements Repuesto{
    damePrecio(): number {
        return 1;
    }
    dameIdentificador(): string {
        return "Soy una pegatina"
    }
}

const Rocio = new Alumno("Rocio",30,"76328278D",true);
const Jacinto  =  new Profesor("Jacinto",23,"Medios");
const Pilar = new Coordinador("Pila",34,"universitarios","mañana");
const Alex = new Alumno("Alex", 24, "12356789A", true);
const Javier = new Alumno("Javier", 25, "987654321C", true);
const David = new Alumno("David", 20, "654987321A", true);
const Ana = new Profesor("Ana", 34, "Medios");

let totalEdad = 0;
const ArrayPersonas: Persona[] = [];
ArrayPersonas.push(Rocio, Jacinto, Pilar, Alex, Javier, David, Ana);

ArrayPersonas.forEach(element => {
    console.log(element.dameNombre());
    totalEdad+=element.dameEdad();
});

let mediaEdad = 0;
mediaEdad = totalEdad/ArrayPersonas.length;

console.log("La edad media es: "+mediaEdad.toFixed(2))

const ArrayRespuestos: Repuesto[] = [];
const Rueda1 = new Rueda();
const Rueda2 = new Rueda();
const Retrovisor1 = new Retrovisor();
const Retrovisor2 = new Retrovisor();
const Luz1 = new Luz();
const Luz2 = new Luz();
const Pegatina1 = new Pegatina();

ArrayRespuestos.push(Rueda1, Rueda2, Retrovisor1, Retrovisor2, Luz1, Luz2, Pegatina1);
let precioTotal = 0;
ArrayRespuestos.forEach(element => {
    if(element instanceof Pegatina ) 
    console.log (element.dameIdentificador()+ " Y mi precio es de: "+element.damePrecio())
    precioTotal += element.damePrecio();
});

let mediaPrecio = 0;
mediaPrecio = precioTotal/ArrayRespuestos.length;
console.log("El precio total es de: "+precioTotal);
console.log("La media de los repuestos es de: "+mediaPrecio.toFixed(2));