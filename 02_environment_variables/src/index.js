/* VARIBLES DE ENTORNO */
/* Son variables sobre la información del sistema, sistema operativo, computador, servidor y entorno que puedo usar */  
// como contraseñas, claves de API, etc. y no deben ser expuestas en el código fuente.
// Se pueden definir en un archivo .env y se pueden cargar en el proceso de Node.js
import {config} from 'dotenv'; // Importamos la librería dotenv
config(); // Cargamos las variables de entorno desde el archivo .env
import env from 'env-var' // Importamos la librería env-var me sirve para tipar las variables de entorno TypeScript

const PORT = env.get('PORT').default(3000).asPortNumber() // Definimos la variable de entorno PORT, si no existe se usará el valor 3000}

console.log(process.env.PORT || 3000); // Si no existe la variable de entorno PORT, se usará el valor 3000
console.log(process.env.NOMBRE); // Imprimimos el valor de la variable de entorno NOMBRE

console.log(process.env.NODE_ENV);
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_NAME);

