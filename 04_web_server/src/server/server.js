const express = require('express'); /* libreria de un servidor local llamado express */
const path = require('path'); /* path es una función de node para crear rutas entre archivos y carpetas del proyecto */
const startServer = (options) => { /* función para iniciar el servidor con las opciones que se le pasen */
    const {port, public_path = 'public' } = options /* destructuración de las opciones que recibe la función, si no se pasa public_path se usa por defecto 'public' */
    // Creamos el servidor express en la variable app
    const app = express();
    // Con use Usamos un middleware para servir archivos estáticos (como HTML, CSS o imágenes) desde la carpeta indicada en public_path
    app.use(express.static(public_path));/* public_path se refiere a una carpeta dentro de tu proyecto  */
    /* obtenemos 'get' del servidor una ruta con 'req' requerimientos y 'res' respuestas */
    app.get('/', (req, res) => { /* creamos una ruta index, es decir, aquí le decimos al servidor cual es el index */
        /* la variable indexPath une una ruta que esta entre parentecis por partes, la plabra join es unir */
        const indexPath = path.join(__dirname, '../../../', public_path, 'index.html');
         /* mostramos por consola la ruta del index */
        /* la respuesta es toda la ruta anterior */
        res.sendFile(indexPath);
    });
    // Iniciamos el servidor
    app.listen(port, () => { /* el servidor escucha en el puerto que le pasamos */
        console.log(`Servidor iniciado en http://localhost:${port}`); /* mensaje de confirmación */
    });
}


module.exports = {
    startServer,
};