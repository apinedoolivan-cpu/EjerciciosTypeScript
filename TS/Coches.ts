class Coche {
    matricula: string;
    potencia: number;
    velocidad: number;
    modelo: string;

    constructor(matricula: string, potencia: number, velocidad: number, modelo: string) {
        this.matricula = matricula;
        this.potencia = potencia;
        this.velocidad = velocidad;
        this.modelo = modelo;
    }

    imprime(): string {
        return `El coche con matrícula ${this.matricula} de modelo ${this.modelo}, tiene una velocidad de ${this.velocidad} para una potencia de ${this.potencia}`;
    }

    velocidadCrucero(): number {
        return this.velocidad / this.potencia;
    }
}

let coches: Coche[] = [
    new Coche("zaader", 120.5, 110, "Seat 600"),
    new Coche("ZZ-2443", 130.3, 125, "Volvo 678"),
    new Coche("iuhsuahs", 150.8, 135.6, "Mercedes 500")
];

let velocidadTotal = 0;
let potenciaTotal = 0;
coches.forEach(coche => {
    console.log(coche.imprime()+" y velocidad de crucero de "+coche.velocidadCrucero().toFixed(2));
    velocidadTotal += coche.velocidad;
    potenciaTotal += coche.potencia;
});
    
let velocidadMedia = velocidadTotal/ coches.length;
let potenciaMedia = potenciaTotal / coches.length;

console.log(`La velocidad media es: ${velocidadMedia.toFixed(2)} y la potencia media es de: ${potenciaMedia.toFixed(2)}`);
