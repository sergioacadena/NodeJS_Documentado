// Ejemplo de uso del módulo 'fs' para leer un archivo de texto en Node.js
// Este código lee un archivo de texto llamado 'texto_poema.txt' y muestra su contenido en la consola.
// El módulo 'fs' (File System) permite interactuar con el sistema de archivos de Node.js.
const tengoelsistemadearchivos = require('fs'); //  require importar el módulo 'fs' para trabajar con el sistema de archivos

/* readFileSync lee en sincrónico el contenido de un archivo */
const poema = tengoelsistemadearchivos.readFileSync('files/texto_poema.txt', 'utf-8'); // leer el archivo poema.txt de forma sincrona y guardarlo en la variable poema

/* crea un nuevo archivo y le copia el contenido de otro */
tengoelsistemadearchivos.writeFileSync('files/texto_poema_copy.txt', 'Hola Mundo desde mi archivo de texto' + poema); 



console.log("esto tiene el documento de texto: " + poema); // Muestra un mensaje en la consola
console.log("esto tiene el documento de texto: " + poema.length); // Muestra un mensaje en la consola con la longitud del texto


