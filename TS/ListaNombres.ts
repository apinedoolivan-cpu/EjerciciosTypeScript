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
const filtrados01 = nombres01.filter((n) => n.toLowerCase() > "i");
const filtrados02 = nombres02.filter((n) => n.toLowerCase() > "i");

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
  const indice = lista.indexOf(nombre);
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
const lista01Comas = nombres01.join(", ");
const lista02Comas = nombres02.join(", ");

console.log("\nnombres01:", lista01Comas);
console.log("nombres02:", lista02Comas);
//7
const longitudes01 = nombres01.map((n) => n.length);
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
const subarray01 = nombres01.slice(1, 7);
const subarray02 = nombres02.slice(4, 6); 
const nombres01modificado = subarray01.concat(subarray02);

console.log("\nSubarray nombres01 (1-7):", subarray01);
console.log("Subarray nombres02 (4-6):", subarray02);
console.log("Nuevo array combinado:", nombres01modificado);
//12
const algunoMayor6_01 = nombres01.some((n) => n.length > 6);
const algunoMayor6_02 = nombres02.some((n) => n.length > 6);

console.log("\n¿Algún nombre de nombres01 tiene más de 6 caracteres?", algunoMayor6_01);
console.log("¿Algún nombre de nombres02 tiene más de 6 caracteres?", algunoMayor6_02);
//13
const asc01 = [...nombres01].sort();
const desc01 = [...nombres01].sort().reverse();
const asc02 = [...nombres02].sort();
const desc02 = [...nombres02].sort().reverse();

console.log("\nOrden ascendente nombres01:", asc01);
console.log("Orden descendente nombres01:", desc01);
console.log("Orden ascendente nombres02:", asc02);
console.log("Orden descendente nombres02:", desc02);