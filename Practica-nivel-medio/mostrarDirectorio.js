/**
Pregunta: Escribe un programa en Node.js que muestre por consola los 
nombres de todos los archivos y directorios en el directorio actual.
*/

const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error('Error al leer el directorio:', err);
    return;
  }

  files.forEach(file => {
    const isDirectory = fs.statSync(file).isDirectory();
    console.log(file + (isDirectory ? ' (directorio)' : ' (archivo)'));
  });
});