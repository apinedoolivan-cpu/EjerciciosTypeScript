abstract class Paciente {
    nombre: string;
    edad: number;
    dni: string;

    constructor(nombre: string, edad: number, dni: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    monstrarInfo():string{
        return `El paciente: ${this.nombre} tiene ${this.edad} años y dni: ${this.dni}`;
    }
}
class PacienteConsulta extends Paciente{
    propiedadEspecial: string;

    constructor(nombre: string, edad: number, dni: string, propiedadEspecial: string){
        super(nombre, edad, dni);
        this.propiedadEspecial = propiedadEspecial;
    }
    monstrarInfo():string{
        return `El paciente: ${this.nombre} tiene ${this.edad} años y dni: ${this.dni} y la especializacion: ${this.propiedadEspecial}`;
    }
}
class PacienteHospitalizado extends Paciente{
    diasHospitalizado: number;
    diagnostico: string;

    constructor(nombre: string, edad: number, dni: string, diasHospitalizado: number, diagnostico: string){
        super(nombre, edad, dni);
        this.diasHospitalizado = diasHospitalizado;
        this.diagnostico = diagnostico;
    }
    monstrarInfo():string{
        return `El paciente: ${this.nombre} tiene ${this.edad} años y dni: ${this.dni} y lleva ${this.diasHospitalizado} días hospitalizado y su diagnóstico es: ${this.diagnostico}`;
    }
}

const pacientes: Paciente[] = [
    new PacienteConsulta("Juan Pérez", 30, "12345678", "Cardiología"),
    new PacienteHospitalizado("María López", 45, "87654321", 5, "Neumonía"),
    new PacienteConsulta("Carlos Gómez", 28, "11223344", "Dermatología"),
    new PacienteHospitalizado("Ana Torres", 50, "44332211", 10, "Cirugía")
];

pacientes.forEach(paciente => {
    console.log(paciente.monstrarInfo());
});