
/* const {envs} = require('./config/env'); forma antigua de importar*/
import {envs} from './config/env.js';
/* const {startServer} = require('./server/server'); forma antigua de importar */
import {startServer} from './server/server.js'; // Importamos la función startServer del módulo server
// Importamos el módulo http


/* asignamos alguna tarea a la función main*/
/* la función main solo se ejecuta cuando se llama a la función agnostica antes */
const main = () => {
   startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    });
    // Aquí puedes agregar el código que deseas ejecutar
}

/* funicón Agnóstica (no tiene nombre) -
 autoconvocada  por qué la ejecutamos de una vez con los ultimos parentecis () */
/* asincrónica */
(async() => {  
    main(); 
}) ();