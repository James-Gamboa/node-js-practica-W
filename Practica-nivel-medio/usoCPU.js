// Pregunta: Escribe un programa en Node.js  que muestre por consola la información  de uso de CPU del sistema, 
// incluyendo  el promedio  de uso de CPU en los últimos 1, 5 y 15 minutos.
const cpu = require("os");

const promedioCPU = cpu.loadavg();

console.log("Uso de CPU promedio en los últimos 1 minuto:", promedioCPU[0]);
console.log("Uso de CPU promedio en los últimos 5 minutos:", promedioCPU[1]);
console.log("Uso de CPU promedio en los últimos 15 minutos:", promedioCPU[2]);
