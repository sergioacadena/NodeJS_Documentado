
const {envs} = require('./config/env');
const {startServer} = require('./server/server');
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