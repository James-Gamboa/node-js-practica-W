/**
Pregunta: Escribe un programa en Node.js que establezca un 
código de salida personalizado y lo imprima por consola.
*/

const customExitCode = "123@yc/.fghJKL+*ñ@23";

process.on('exit', (code) => {
  console.log(`Código de salida personalizado: ${code}`);
});

process.exit(customExitCode);