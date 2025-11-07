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
function mostrarLista(nombreLista: string, lista: string[]) {
  console.log(`Nombres en ${nombreLista}:`);
  lista.forEach((nombre, i) => console.log(`${i + 1}. ${nombre}`));
}

mostrarLista("nombres01", nombres01);
mostrarLista("nombres02", nombres02);
//2
let todosMayorQue2_nombres01 = nombres01.every((n) => n.length > 2);
let todosMayorQue2_nombres02 = nombres02.every((n) => n.length > 2);

if(todosMayorQue2_nombres01) console.log("\nTodos los nombres tiene mas de 2 caracteres en nombres01");
else console.log("No todos los nombres tiene mas de 2 caracteres en nombres01")
if(todosMayorQue2_nombres02) console.log("\nTodos los nombres tiene mas de 2 caracteres en nombres02");
else console.log("No todos los nombres tiene mas de 2 caracteres en nombres022");
//3
let filtrados01 = nombres01.filter((n) => n.toLowerCase() > "i");
let filtrados02 = nombres02.filter((n) => n.toLowerCase() > "i");

console.log("\nNombres01 mayores que 'i':", filtrados01);
console.log("Nombres02 mayores que 'i':", filtrados02);
//4
function palindromo(nombre: string): string {
  return nombre.split("").reverse().join("");
}

console.log("\nPalíndromos de nombres01:");
nombres01.forEach((n) => console.log(`${n} -> ${palindromo(n)}`));

console.log("Palíndromos de nombres02:");
nombres02.forEach((n) => console.log(`${n} -> ${palindromo(n)}`));
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

console.log("\nnombres01:", lista01Comas);
console.log("nombres02:", lista02Comas);
//7
let longitudes01 = nombres01.map((n) => n.length);
console.log("\nLongitud de cada nombre en nombres01:", longitudes01);
//8
nombres01.pop();
nombres02.pop();
console.log("\nnombres01:", nombres01);
console.log("nombres02:", nombres02);
//9
nombres01.push("Jacinto");
nombres02.push("Jacinto");

console.log("\nnombres01:", nombres01);
console.log("nombres02:", nombres02);
//10
let runningTotal: number[] = [];
longitudes01.reduce((acc, curr) => {
  let sum = acc + curr;
  runningTotal.push(sum);
  return sum;
}, 0);

console.log("\nRunning total de longitudes01:", runningTotal);
//11
let subarray01 = nombres01.slice(1, 7);
let subarray02 = nombres02.slice(4, 6); 
let nombres01modificado = subarray01.concat(subarray02);

console.log("\nSubarray nombres01 (1-7):", subarray01);
console.log("Subarray nombres02 (4-6):", subarray02);
console.log("Nuevo array combinado:", nombres01modificado);
//12
let algunoMayor6_01 = nombres01.some((n) => n.length > 6);
let algunoMayor6_02 = nombres02.some((n) => n.length > 6);

console.log("\n¿Algún nombre de nombres01 tiene más de 6 caracteres?", algunoMayor6_01);
console.log("¿Algún nombre de nombres02 tiene más de 6 caracteres?", algunoMayor6_02);
//13
let nombres01_Ascendente = [...nombres01].sort();
let nombres01_Descendente = [...nombres01].sort().reverse();
let nombres02_Acendente = [...nombres02].sort();
let nombres02_Descendente = [...nombres02].sort().reverse();

console.log("\nOrden ascendente nombres01:", nombres01_Ascendente);
console.log("Orden descendente nombres01:", nombres01_Descendente);
console.log("Orden ascendente nombres02:", nombres02_Acendente);
console.log("Orden descendente nombres02:", nombres02_Descendente);