interface ICadenable
{
    TodosLosElementosMayorQue(numeroCaracteres : number) : boolean
    AlgunoDeLosElementosMayorQue(numeroCaracteres:  number): boolean
    MuestraContenidoArray(): void
    FiltraPorPrimeraLetra(letra: string):string[]
    InvierteCadenas(): string[]
    IndiceDeElemento(elemento: string):number
    ConcatenaElementosConComa(): string
    ArrayConLongitudDeLosElementos(): number[]
    EliminarUltimoElemento(): void;
    AñadirNuevoElemento(elemento: string): void
    RunningTotalsSobreLaLongitudDeLosElementos():number[]
    DameRebanadaDeArray(indiceInicial: number, indiceFinal: number): string[]
    AñadirNuevosElementosAlArray(cadenas :string[]):void
    OrdenarElementosAscendente(): string[]
    OrdenarElementosDecendente(): string[]
}
class ProcesoCadenasV01 implements ICadenable
{
    private elementos: string[];

    constructor(elementos: string[]) {
        this.elementos = (Array.isArray(elementos) ? elementos : [])
            .map(el => (typeof el === 'string' ? el.trim() : ''))
            .filter(el => el.length > 0);
    }
    AlgunoDeLosElementosMayorQue(numeroCaracteres: number): boolean {
        return this.elementos.some(el => el.length > numeroCaracteres);
    }
    AñadirNuevosElementosAlArray(cadenas: string[]): void {
        if (cadenas && Array.isArray(cadenas)) {
            const nuevos = cadenas
                .filter(el => typeof el === 'string')
                .map(el => el.trim())
                .filter(el => el.length > 0);
            this.elementos.push(...nuevos);
        }
    }
    DameRebanadaDeArray(indiceInicial: number, indiceFinal: number): string[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        if (indiceInicial < 0 || indiceFinal > this.elementos.length || indiceInicial > indiceFinal) return [];
        return this.elementos.slice(indiceInicial, indiceFinal);
    }
    RunningTotalsSobreLaLongitudDeLosElementos(): number[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        const result: number[] = [];
        let acumulado = 0;
        for (const el of this.elementos) {
            acumulado += el.length;
            result.push(acumulado);
        }
        return result;
    }
    AñadirNuevoElemento(elemento: string): void {
        if (elemento && typeof elemento === 'string') {
            const trimmed = elemento.trim();
            if (trimmed.length > 0) this.elementos.push(trimmed);
        } else {
            console.log('Elemento no válido para añadir.');
        }
    }
    EliminarUltimoElemento(): void {
        if (this.elementos.length > 0) {
            this.elementos.pop();
        } else {
            console.log('No hay elementos para eliminar.');
        }
    }
    ArrayConLongitudDeLosElementos(): number[] {
        return this.elementos.map(el => (el ? el.length : 0));
    }
    ConcatenaElementosConComa(): string {
        return this.elementos.join(', ');
    }
    OrdenarElementosAscendente(): string[] {
        const target = Array.isArray(this.elementos) ? [...this.elementos] : [];
        return target.sort((a, b) => a.localeCompare(b));
    }
    OrdenarElementosDecendente(): string[] {
        const target = Array.isArray(this.elementos) ? [...this.elementos] : [];
        return target.sort((a, b) => b.localeCompare(a));
    }
    IndiceDeElemento(elemento: string): number {
        if (!this.elementos || !elemento) return -1;
        const buscado = elemento.trim();
        if (!buscado) return -1;
        const exactIndex = this.elementos.indexOf(buscado);
        if (exactIndex !== -1) return exactIndex;
        return this.elementos.findIndex(el => {
            if (!el) return false;
            return el.toLowerCase() === buscado.toLowerCase();
        });
    }
    InvierteCadenas(): string[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        return this.elementos.map(el => el.split('').reverse().join(''));
    }
    FiltraPorPrimeraLetra(letra: string): string[] {
        if (!this.elementos || this.elementos.length === 0) return [];
        if (!letra || typeof letra !== 'string') return [];
        const primera = letra.trim().toLowerCase().charAt(0);
        if (!primera) return [];
        return this.elementos.filter(el => {
            if (!el || el.length === 0) return false;
            return el.trim().charAt(0).toLowerCase() === primera;
        });
    }
    MuestraContenidoArray(): void {
        if (!this.elementos || this.elementos.length === 0) {
            console.log('ProcesoCadenasV01: no hay elementos para mostrar.');
            return;
        }
        console.log('Contenido de ProcesoCadenasV01:');
        this.elementos.forEach((el, idx) => {
            console.log(`  [${idx}] ${el}`);
        });
    }
    TodosLosElementosMayorQue(numeroCaracteres: number): boolean {
        return this.elementos.every(el => el.length > numeroCaracteres);
    }
}

class ListaNombres
{
    readonly GestorDeCadenas :ICadenable;
    constructor(Gestor :ICadenable){
        this.GestorDeCadenas = Gestor;
    }
    DameElementosMayorQueNumero(numero: number){
        if(this.GestorDeCadenas.TodosLosElementosMayorQue(numero)) {
            console.log(`Todos los elementos son mayores que ${numero} caracteres.`);
        } else {
            console.log(`No todos los elementos son mayores que ${numero} caracteres.`);
        }
    }
    DameElementosPorPrimeraLetra(letra:string){
        console.log(`Elementos que empiezan por '${letra}':`);
        this.GestorDeCadenas.FiltraPorPrimeraLetra(letra).forEach((el, idx) => {
            console.log(`  [${idx}] ${el}`);
        });
    }
    DamePalindromos(){
        console.log("Palíndromos:");
        this.GestorDeCadenas.InvierteCadenas().forEach((el, idx) => {
            console.log(`  [${idx}] ${el}`);
        });
    }
    DameElementosPorNombre(nombre:string) {
        if (this.GestorDeCadenas.IndiceDeElemento(nombre) !== -1) {
            console.log(`Elemento encontrado: ${nombre}`);
        } else {
            console.log(`No hay elemento con el nombre ${nombre}.`);
        }
    }
    DameUnionDeElementosConComa(){
        console.log("Elementos unidos con coma:");
        console.log(this.GestorDeCadenas.ConcatenaElementosConComa());
    }
    DameArrayConLongitudes(){
        console.log("Array con longitudes de los elementos:");
        console.log(this.GestorDeCadenas.ArrayConLongitudDeLosElementos());
    }
    EliminarUltimoElemento(){
        this.GestorDeCadenas.EliminarUltimoElemento();
    }
    AñadirNuevoElemento(elemento:string){
        this.GestorDeCadenas.AñadirNuevoElemento(elemento);
    }
    DameRunningTotalsSobreLaLongitudDeLosElementos(){
        console.log("Running totals sobre la longitud de los elementos:");
        console.log(this.GestorDeCadenas.RunningTotalsSobreLaLongitudDeLosElementos());
    }
    DameRebanadaDeArray(indiceInicial: number, indiceFinal: number){
        console.log(`Rebanada de array desde ${indiceInicial} hasta ${indiceFinal}:`);
        console.log(this.GestorDeCadenas.DameRebanadaDeArray(indiceInicial, indiceFinal));
    }
    DameAlgunElementoMayorQue(numeroCaracteres: number){
        if(this.GestorDeCadenas.AlgunoDeLosElementosMayorQue(numeroCaracteres)) {
            console.log(`Algún elemento es mayor que ${numeroCaracteres} caracteres.`);
        } else {
            console.log(`Ningún elemento es mayor que ${numeroCaracteres} caracteres.`);    
        }
    }
    DameOrdenadosAscendente(){ 
        console.log("Elementos ordenados ascendente:");
        console.log(this.GestorDeCadenas.OrdenarElementosAscendente());
    }
    DameOrdenadosDecendente(){ 
        console.log("Elementos ordenados descendente:");
        console.log(this.GestorDeCadenas.OrdenarElementosDecendente());
    }   
}

const nombres01= new ListaNombres(new ProcesoCadenasV01(["Andra", "Aneu", "Arlet",
    "Ehub", "Indivar", "Samay", "Sanca", "Tanit", "Uxia", "Zenda"]));
const nombres02= new ListaNombres(new ProcesoCadenasV01(["Abba", "Acfred", "Areu",
    "Drac", "Guim", "Iol", "Kilian", "Mirt", "Yannick", "Zigot", "Tanit"]));

nombres01.DameElementosMayorQueNumero(2);
nombres02.DameElementosMayorQueNumero(2);
nombres01.DameElementosPorPrimeraLetra('I');
nombres02.DameElementosPorPrimeraLetra('I');
nombres01.DamePalindromos();
nombres02.DamePalindromos();
nombres01.DameElementosPorNombre("Tanit");
nombres02.DameElementosPorNombre("Tanit");
nombres01.DameElementosPorNombre("Jacinto");
nombres02.DameElementosPorNombre("Jacinto");
nombres01.DameUnionDeElementosConComa();
nombres02.DameUnionDeElementosConComa();
nombres01.DameArrayConLongitudes();
nombres02.DameArrayConLongitudes();
nombres01.EliminarUltimoElemento();
nombres02.EliminarUltimoElemento();
nombres01.AñadirNuevoElemento("Jacinto");
nombres02.AñadirNuevoElemento("Jacinto");
nombres01.DameRunningTotalsSobreLaLongitudDeLosElementos();
nombres02.DameRunningTotalsSobreLaLongitudDeLosElementos();
nombres01.DameRebanadaDeArray(1, 7);
nombres02.DameRebanadaDeArray(4, 6);
nombres01.DameAlgunElementoMayorQue(6);
nombres02.DameAlgunElementoMayorQue(6);
nombres01.DameOrdenadosAscendente();
nombres02.DameOrdenadosAscendente();
nombres01.DameOrdenadosDecendente();
nombres02.DameOrdenadosDecendente();