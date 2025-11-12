const nombres001: string[] = [
  "Andra",
  "Aneu",
  "Arlet",
  "Ehud",
  "Indivar",
  "Samay",
  "Sança",
  "Tanit",
  "Uxia",
  "Zenda",
];

const nombres002: string[] = [
  "Abba",
  "Acfred",
  "Areu",
  "Drac",
  "Guim",
  "lol",
  "Kilian",
  "Mirt",
  "Yannick",
  "Zigor",
  "Tanit",
];
//1
function mostrar(nombreLista: string, lista: string[]) {
  console.log(`\nNombres en ${nombreLista}:`);
  lista.forEach((nombre, i) => console.log(`${i + 1}. ${nombre}`));
}

mostrar("nombres001", nombres001);
mostrar("nombres002", nombres002);
//2
function verificarNombresMayoresQue2(nombres: string[], nombreLista: string) {
  const todosMayorQue2 = nombres.every((n) => n.length > 2);

  if (todosMayorQue2) {
    console.log(`\nTodos los nombres tienen más de 2 caracteres en ${nombreLista}`);
  } else {
    console.log(`No todos los nombres tienen más de 2 caracteres en ${nombreLista}`);
  }
}
verificarNombresMayoresQue2(nombres001, "nombres001");
verificarNombresMayoresQue2(nombres002, "nombres002");
//3
const filtrados01 = nombres001.filter((nombre) => nombre.toLowerCase() > "i");
const filtrados02 = nombres002.filter((nombre) => nombre.toLowerCase() > "i");

mostrar("nombres001 mayores que 'i':",filtrados01);
mostrar("nombres002 mayores que 'i':",filtrados02);
//4
function palindromo(nombre: string): string {
  return nombre.split("").reverse().join("");
}
const palindromos01 = nombres001.map(nombre => `${nombre} -> ${palindromo(nombre)}`);
const palindromos02 = nombres002.map(nombre => `${nombre} -> ${palindromo(nombre)}`);

mostrar("Palíndromos de nombres001", palindromos01);
mostrar("Palíndromos de nombres002", palindromos02);
//5
function buscarNombre(nombre: string, lista: string[], nombreLista: string) {
  const indice = lista.indexOf(nombre);
  if (indice > -1) {
    console.log(`\n${nombre} está en ${nombreLista} ${indice} veces.`);
  } else {
    console.log(`\n${nombre} NO está en ${nombreLista}.`);
  }
}

buscarNombre("Tanit", nombres001, "nombres001");
buscarNombre("Tanit", nombres002, "nombres002");
buscarNombre("Jacinto", nombres001, "nombres001");
buscarNombre("Jacinto", nombres002, "nombres002");
//6
const lista01Comas = nombres001.join(", ");
const lista02Comas = nombres002.join(", ");
const listaTotal = [...lista01Comas, ...lista02Comas];

mostrar("Lista combinada de nombres separados: ", listaTotal);
//7
const longitudes = nombres001.map((nombre) => nombre.length);
console.log("\nLongitudes:", longitudes);
//8
nombres001.pop();
nombres002.pop();
mostrar("nombres001", nombres001);
mostrar("nombres002", nombres002);
//9
nombres001.push("Jacinto");
nombres002.push("Jacinto");

mostrar("nombres001", nombres001);
mostrar("nombres002", nombres002);
//10
let longitudesAcumulado = 0;
const runningTotalLongitudes = longitudes.map(valor => longitudesAcumulado += valor);

console.log("\nRunning total de longitudes:", runningTotalLongitudes);
//11
const subarray01 = nombres001.slice(1, 7);
const subarray02 = nombres002.slice(4, 6); 
const nombres001modificado = subarray01.concat(subarray02);

mostrar("Subarray nombres001 (1-7):", subarray01);
mostrar("Subarray nombres002 (4-6):", subarray02);
mostrar("Nuevo array combinado:", nombres001modificado);
//12
const algunoMayor6_01 = nombres001.some((nombre) => nombre.length > 6);
const algunoMayor6_02 = nombres002.some((nombre) => nombre.length > 6);

console.log("\n¿Algún nombre de nombres001 tiene más de 6 caracteres?", algunoMayor6_01);
console.log("¿Algún nombre de nombres002 tiene más de 6 caracteres?", algunoMayor6_02);
//13
const nombres001_Ascendente = [...nombres001].sort();
const nombres001_Descendente = [...nombres001].sort().reverse();
const nombres002_Ascendente = [...nombres002].sort();
const nombres002_Descendente = [...nombres002].sort().reverse();

mostrar("Orden ascendente nombres001", nombres001_Ascendente);
mostrar("Orden descendente nombres001", nombres001_Descendente);
mostrar("Orden ascendente nombres002", nombres002_Ascendente);
mostrar("Orden descendente nombres002", nombres002_Descendente);