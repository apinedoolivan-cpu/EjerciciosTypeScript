abstract class Animal {
    mesNacimiento: number;
    diaNacimiento: number;
    añoNacimiento: number;
    nombre: [string, string, string];

    constructor(mesNacimiento: number, diaNacimiento: number, añoNacimiento: number, nombre: [string, string, string]) {
        if (mesNacimiento < 1 || mesNacimiento > 12) throw new Error("Mes de nacimiento debe estar entre 1 y 12.");
        if (diaNacimiento < 1 || diaNacimiento > 31) throw new Error("Día de nacimiento debe estar entre 1 y 31.");
        if (añoNacimiento < 2000 || añoNacimiento > 2024) throw new Error("Año de nacimiento debe estar entre 2000 y 2024.");
        if (nombre.length <= 2) throw new Error("El nombre tiene que tener mas de dos");

        this.mesNacimiento = mesNacimiento;
        this.diaNacimiento = diaNacimiento;
        this.añoNacimiento = añoNacimiento;
        this.nombre = nombre;
    }

    dameEdad():number{
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.añoNacimiento;
        if (hoy.getMonth() + 1 < this.mesNacimiento || (hoy.getMonth() + 1 === this.mesNacimiento && hoy.getDate() < this.diaNacimiento)) {
            edad--;
        }
        return edad;
    }
    dameDatos(): string {
        return `${this.nombre.join(" ")} - Nacimiento: ${this.diaNacimiento}/${this.mesNacimiento}/${this.añoNacimiento}`;
    }
}

class Mamifero extends Animal {
    mesesGestacion: number;

    constructor(mesNacimiento: number,diaNacimiento: number,añoNacimiento: number,nombre: [string, string, string],mesesGestacion: number){
        super(mesNacimiento, diaNacimiento, añoNacimiento, nombre);
        if (mesesGestacion < 1 || mesesGestacion > 18) throw new Error("Los meses de gestación deben estar entre 1 y 18.");
        else this.mesesGestacion = mesesGestacion;
    }
    dameDatos(): string {
    return `${super.dameDatos()} (Gestación: ${this.mesesGestacion} meses)`;
    }
}

class Primate extends Mamifero {
    masaCerebral: number;

    constructor(mesNacimiento: number,diaNacimiento: number,añoNacimiento: number,
        nombre: [string, string, string],mesesGestacion: number,masaCerebral: number) {
        super(mesNacimiento, diaNacimiento, añoNacimiento, nombre, mesesGestacion);
        if (masaCerebral < 100 || masaCerebral > 2000)throw new Error("La masa cerebral debe estar entre 100 y 2000 gramos.");
        else this.masaCerebral = masaCerebral;
    }
    dameMasaCerebral():number{
        return this.masaCerebral / this.mesesGestacion;
    }
    dameDatos(): string {
        return `${super.dameDatos()} - Masa cerebral: ${this.masaCerebral}g (Proporción: ${this.dameMasaCerebral().toFixed(2)})`;
    }
}

class Humano extends Primate {
  apellidos: string;

  constructor(mesNacimiento: number,diaNacimiento: number,añoNacimiento: number,
    nombre: [string, string, string],mesesGestacion: number,masaCerebral: number,apellidos: string) {
    super(mesNacimiento,diaNacimiento,añoNacimiento,nombre,mesesGestacion,masaCerebral);
    this.apellidos = apellidos;
  }

  dameDatos(): string {
    return `${super.dameDatos()} - Apellidos: ${this.apellidos}`;
  }
}

const humano = new Humano(4,6, 2000, ["Alejandro", "Alex", "Ale"], 9, 1350, "Pinedo Oliván");
console.log(humano.dameDatos());