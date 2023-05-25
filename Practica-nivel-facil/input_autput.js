/**
Pregunta: Escribe un programa en Node.js que lea una línea de texto desde la entrada estándar (stdin) 
y la muestre en la salida estándar (stdout).
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Ingresa una línea de texto: ', (linea) => {
  console.log('La línea ingresada es: ' + linea);
  rl.close();
});