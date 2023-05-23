// Pregunta: Escribe un programa en Node.js  que muestre por consola la información  de uso de CPU del sistema, 
// incluyendo  el promedio  de uso de CPU en los últimos 1, 5 y 15 minutos.
const archive = require("fs");

const rutaArchivo = "C:/Users/James/Desktop/mi_archivo.txt";

if (archive.existsSync(rutaArchivo)) {
  console.log("El archivo existe.");
} else {
  console.log("El archivo no existe.");
}
