class Envio {
    id: string
    numero: bigint;
    precio: number;
    recibido: boolean;

    constructor(id: string, numero: bigint, precio: number, recibido: boolean){
        if (!this.validarIdentificador(id)) this.id = "Id no valido"
        else this.id =id;
        
        this.numero = numero;
        this.precio= precio;
        this.recibido = recibido;
    }
    calcularIVA():number{
        return this.precio*21/100
    }
    validarIdentificador(id: string): boolean { 
        let expresion = /^[A-H]{2}\d{2}[I-Z]{2}$/;
        return expresion.test(id);
    }
}


const envio1 = new Envio("AB12IJ", 12345678901234567890n, 100, true);
const envio2 = new Envio("CD34KL", 98765432109876543210n, 250.50, false);
const envio3 = new Envio("GH56MN", 55555555555555555555n, 80.99, true);


console.log(`IVA del envío 1 (${envio1.id}): €${envio1.calcularIVA().toFixed(2)}`);
console.log(`IVA del envío 2 (${envio2.id}): €${envio2.calcularIVA().toFixed(2)}`);
console.log(`IVA del envío 3 (${envio3.id}): €${envio3.calcularIVA().toFixed(2)}`);