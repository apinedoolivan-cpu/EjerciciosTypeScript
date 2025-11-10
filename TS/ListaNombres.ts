let nombres01: string[] = [
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

let nombres02: string[] = [
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

mostrar("nombres01", nombres01);
mostrar("nombres02", nombres02);
//2
function verificarNombresMayoresQue2(nombres: string[], nombreLista: string) {
  let todosMayorQue2 = nombres.every((n) => n.length > 2);

  if (todosMayorQue2) {
    console.log(`\nTodos los nombres tienen más de 2 caracteres en ${nombreLista}`);
  } else {
    console.log(`No todos los nombres tienen más de 2 caracteres en ${nombreLista}`);
  }
}
verificarNombresMayoresQue2(nombres01, "nombres01");
verificarNombresMayoresQue2(nombres02, "nombres02");
//3
let filtrados01 = nombres01.filter((nombre) => nombre.toLowerCase() > "i");
let filtrados02 = nombres02.filter((nombre) => nombre.toLowerCase() > "i");

mostrar("Nombres01 mayores que 'i':",filtrados01);
mostrar("Nombres02 mayores que 'i':",filtrados02);
//4
function palindromo(nombre: string): string {
  return nombre.split("").reverse().join("");
}
let palindromos01 = nombres01.map(nombre => `${nombre} -> ${palindromo(nombre)}`);
let palindromos02 = nombres02.map(nombre => `${nombre} -> ${palindromo(nombre)}`);

mostrar("Palíndromos de nombres01", palindromos01);
mostrar("Palíndromos de nombres02", palindromos02);
//5
function buscarNombre(nombre: string, lista: string[], nombreLista: string) {
  let indice = lista.indexOf(nombre);
  if (indice > -1) {
    console.log(`\n${nombre} está en ${nombreLista} ${indice} veces.`);
  } else {
    console.log(`\n${nombre} NO está en ${nombreLista}.`);
  }
}

buscarNombre("Tanit", nombres01, "nombres01");
buscarNombre("Tanit", nombres02, "nombres02");
buscarNombre("Jacinto", nombres01, "nombres01");
buscarNombre("Jacinto", nombres02, "nombres02");
//6
let lista01Comas = nombres01.join(", ");
let lista02Comas = nombres02.join(", ");
let listaTotal = [...nombres01, ...nombres02];

mostrar("Lista combinada de nombres separados: ", listaTotal);
//7
let longitudes = nombres01.map((nombre) => nombre.length);
console.log("\nLongitudes:", longitudes);
//8
nombres01.pop();
nombres02.pop();
mostrar("nombres01", nombres01);
mostrar("nombres02", nombres02);
//9
nombres01.push("Jacinto");
nombres02.push("Jacinto");

mostrar("nombres01", nombres01);
mostrar("nombres02", nombres02);
//10
let longitudesAcumulado = 0;
let runningTotalLongitudes = longitudes.map(valor => longitudesAcumulado += valor);

console.log("\nRunning total de longitudes:", runningTotalLongitudes);
//11
let subarray01 = nombres01.slice(1, 7);
let subarray02 = nombres02.slice(4, 6); 
let nombres01modificado = subarray01.concat(subarray02);

mostrar("Subarray nombres01 (1-7):", subarray01);
mostrar("Subarray nombres02 (4-6):", subarray02);
mostrar("Nuevo array combinado:", nombres01modificado);
//12
let algunoMayor6_01 = nombres01.some((nombre) => nombre.length > 6);
let algunoMayor6_02 = nombres02.some((nombre) => nombre.length > 6);

console.log("\n¿Algún nombre de nombres01 tiene más de 6 caracteres?", algunoMayor6_01);
console.log("¿Algún nombre de nombres02 tiene más de 6 caracteres?", algunoMayor6_02);
//13
let nombres01_Ascendente = [...nombres01].sort();
let nombres01_Descendente = [...nombres01].sort().reverse();
let nombres02_Ascendente = [...nombres02].sort();
let nombres02_Descendente = [...nombres02].sort().reverse();

mostrar("Orden ascendente nombres01", nombres01_Ascendente);
mostrar("Orden descendente nombres01", nombres01_Descendente);
mostrar("Orden ascendente nombres02", nombres02_Ascendente);
mostrar("Orden descendente nombres02", nombres02_Descendente);