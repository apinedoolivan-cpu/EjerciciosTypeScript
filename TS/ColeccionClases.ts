abstract class Regalo {
    id: string;
    precioCompra: number;
    precioVenta: number;

    constructor(id: string, precioCompra: number, precioVenta: number){

        const regex = /^[A-Z]{3}[0-9]{4}$/;
        if (!regex.test(id)) throw new Error("ID inválido");
        else this.id = id;

        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
    }
    beneficio():number{
        return this.precioVenta - this.precioCompra;
    }
}
class JarronMing extends Regalo{
    constructor(id: string){
        super(id,100,220);
    }
}
class TazaMong extends Regalo{
    constructor(id: string){
        super(id,10,22);
    }
}
class ColganteChulin extends Regalo{
    constructor(id: string){
        super(id,120,140);
    }
}

let precioCompraTotal = 0;
let precioVentaTotal = 0;
let precioCompraMedio = 0;
let precioVentaMedio = 0;
let beneficioTotal = 0;
let beneficioMedio = 0;
const coleccionRegalos : Regalo[] = [
    new JarronMing("ABC0001"),
    new JarronMing("DEF0002"),
    new TazaMong("GHI0003"),
    new TazaMong("JKL0004"),
    new ColganteChulin("MNO0005"),
    new ColganteChulin("PQR0006")
];

function ordenarPorCompra(){
    return coleccionRegalos.sort((a, b) => a.precioCompra - b.precioCompra);
}
function ordenarPorVenta(){
    return coleccionRegalos.sort((a, b) => a.precioVenta - b.precioVenta);
}
function ordenarPorBeneficio()
{
    return coleccionRegalos.sort((a, b) => a.beneficio() - b.beneficio());
}


ordenarPorCompra();
ordenarPorVenta();

function aplicarIVA(porcentaje: number) {
    coleccionRegalos.forEach(regalo => {
        regalo.precioCompra *= (1 + porcentaje);
        regalo.precioVenta *= (1 + porcentaje);
    });
}

aplicarIVA(0.28);
ordenarPorBeneficio();
coleccionRegalos.forEach(regalo => {
    precioCompraTotal += regalo.precioCompra;
    precioVentaTotal += regalo.precioVenta;
    beneficioTotal += regalo.beneficio();
    console.log(`El regalo ${regalo.id} tiene un beneficio de: ${regalo.beneficio().toFixed(2)}`)
});

precioCompraMedio = precioCompraTotal/coleccionRegalos.length;
precioVentaMedio = precioVentaTotal/coleccionRegalos.length;
beneficioMedio = beneficioTotal/coleccionRegalos.length;

console.log("\nPrecio de compra total: ", precioCompraTotal.toFixed(2));
console.log("Precio de venta total: ", precioVentaTotal.toFixed(2));
console.log("Precio de compra medio: ", precioCompraMedio.toFixed(2));
console.log("Precio de venta medio: ", precioVentaMedio.toFixed(2));
console.log("Beneficio total: ", beneficioTotal.toFixed(2));
console.log("Beneficio medio: ", beneficioMedio.toFixed(2));