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
else console.log("No todos los nombres son mayor 2")
