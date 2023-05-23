//  Pregunta: Escribe un programa en Node.js que reciba dos argumentos de línea de comandos, 
//los sume y muestre el resultado por consola.
const add = require("readline");

const sumar = add.createInterface({
  input: process.stdin,
  output: process.stdout
});

sumar.question("Ingrese el primer número: ", (num1) => {
  sumar.question("Ingrese el segundo número: ", (num2) => {
    const resultado = parseInt(num1) + parseInt(num2);
    console.log("El resultado de la suma es:", resultado);
    sumar.close();
  });
});

