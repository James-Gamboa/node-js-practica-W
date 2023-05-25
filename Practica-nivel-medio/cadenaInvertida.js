/**
Pregunta: Escribe un programa en Node.js que reciba una cadena de texto como argumento 
de línea de comandos y muestre la misma cadena invertida por consola.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa una cadena de texto: ', (cadena) => {
  const cadenaInvertida = cadena.split('').reverse().join(''); 
  console.log('Cadena invertida:', cadenaInvertida);
  rl.close();
});