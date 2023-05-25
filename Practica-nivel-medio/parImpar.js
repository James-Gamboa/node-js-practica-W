/**
Pregunta: Escribe un programa en Node.js que solicite al usuario ingresar un número entero desde la entrada estándar y verifique 
si el número es par o impar. Luego, muestra un mensaje indicando si el número  es par o impar.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número entero: ', (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log('No ingresaste un número válido.');
  } else {
    if (number % 2 === 0) {
      console.log('El número es par.');
    } else {
      console.log('El número es impar.');
    }
  }

  rl.close();
});