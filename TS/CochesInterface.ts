interface IValorable{
    damePrecio() : number;
}
class ComplementoCoche implements IValorable{
    tipo: string; 
    private precio: number;
    constructor(tipo: string, precio: number) {
        this.tipo = tipo;
        this.precio = precio;
    }
    damePrecio(): number {
        console.log(`Precio de ${this.tipo}: ${this.precio} €.`);
        return this.precio;
    }
}
class Coche implements IValorable{
    modelo: string;
    elementos: IValorable[];

    constructor(modelo: string, elementos: IValorable[]) {
        this.modelo = modelo;
        this.elementos = elementos;
    }
    damePrecio(): number {
        let total = 0;
        this.elementos.forEach(elemento => total += elemento.damePrecio());
        console.log(`Precio del coche ${this.modelo}: ${total} €.`);
        return total;
    }
}
class Concesionario implements IValorable{
    private coches: Coche[];

    constructor(coches: Coche[]) {
        this.coches = coches;
    }
    damePrecio(): number {
        let total = 0;
        this.coches.forEach(coche => total += coche.damePrecio());
        console.log(`Precio del concesionario: ${total} €.`);   
        return total;
    }
}
let piezasCoche1: IValorable[] = [
    new ComplementoCoche("Motor V8", 8000),
    new ComplementoCoche("Llantas aleación", 1200),
    new ComplementoCoche("Asientos cuero", 1500),
    new ComplementoCoche("Climatizador", 1000),
    new ComplementoCoche("Sistema navegación", 600),
    new ComplementoCoche("Rueda1", 400),
    new ComplementoCoche("Rueda2", 400),
    new ComplementoCoche("Rueda3", 400),
    new ComplementoCoche("Rueda4", 400),
    new ComplementoCoche("Carroceria", 700),
    new ComplementoCoche("Volante", 300)
];
let coche1 = new Coche("Deportivo X", piezasCoche1);
let piezasCoche2: IValorable[] = [
    new ComplementoCoche("Motor V6", 6000),
    new ComplementoCoche("Llantas acero", 800), 
    new ComplementoCoche("Asientos tela", 1200),
    new ComplementoCoche("Climatizador", 1000),
    new ComplementoCoche("Sistema audio", 500),
    new ComplementoCoche("Rueda1", 300),
    new ComplementoCoche("Rueda2", 300),
    new ComplementoCoche("Rueda3", 300),
    new ComplementoCoche("Rueda4", 300),
    new ComplementoCoche("Carroceria", 600),
    new ComplementoCoche("Volante", 250)
];
let coche2 = new Coche("Sedán Y", piezasCoche2);
let concesionario = new Concesionario([coche1, coche2]);
concesionario.damePrecio(); 