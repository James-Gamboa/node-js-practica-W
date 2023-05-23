// Pregunta: Escribe un programa en Node.js que muestre el uso de memoria del proceso en bytes.
const usedMemory = process.memoryUsage().heapUsed;

console.log("Uso de memoria del proceso:", usedMemory, "bytes");
