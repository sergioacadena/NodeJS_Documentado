// Mostrar información del proceso Node.js actual
console.log("Plataforma del sistema operativo:", process.platform); /* muestra la plataforma del sistema operativo */
console.log("Ruta del archivo actual:", __filename); /* muestra la ruta de mi archivo */
console.log("Ruta del directorio actual:", __dirname); /* muestra la ruta de mi directorio */
console.log("ID del proceso actual:", process.pid); /* muestra el id del proceso actual */
console.log("Versión de Node.js:", process.version); /* muestra la versión de node */
console.log("Arquitectura del sistema operativo:", process.arch); /* muestra la arquitectura del sistema operativo */
console.log("Directorio de trabajo actual:", process.cwd()); /* muestra el directorio de trabajo actual */
console.log("Memoria total del sistema:", process.memoryUsage()); /* muestra la memoria total del sistema */
console.log("Número de núcleos del procesador:", require('os').cpus().length); /* muestra el número de núcleos del procesador */
console.log("Tiempo de actividad del sistema:", require('os').uptime()); /* muestra el tiempo de actividad del sistema */
console.log("Información del sistema:", require('os').platform()); /* muestra la información del sistema */
console.log("Información del sistema:", require('os').arch()); /* muestra la información del sistema */



