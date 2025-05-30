const express = require('express'); // Importar express para crear un servidor web
const mongoose = require('mongoose'); // Importar mongoose para interactuar con MongoDB
const bodyParser = require('body-parser'); // Importar body-parser para analizar el cuerpo de las solicitudes
const { config } = require ('dotenv'); // Importar dotenv para manejar variables de entorno
config(); // Cargar las variables de entorno desde el archivo .env

const bookRoutes = require('./routes/book.routes'); // Importar las rutas de libros, rutas por donde envio los datos

//usamos express para los middlewares y las rutas
const app = express(); // Crear una instancia de la aplicación Express
app.use(bodyParser.json()); // Middleware: uselo en formato JSON todo lo que envía le usuario

/* aca conectamos la bd */
mongoose.connect(process.env.MONGO_URI, { // Conectar a la base de datos MongoDB usando la URI de conexión
    dbName: process.env.DB_NAME, // Nombre de la base de datos
    useNewUrlParser: true, // Usar el nuevo analizador de URL
    
})
const db = mongoose.connection; // Obtener la conexión a la base de datos
app.use('/books', (req, res, next) => { // Middleware para manejar errores de conexión a la base de datos
    if (!db) { // Si no hay conexión a la base de datos
        return res.status(500).json({ message: 'Error de conexión a la base de datos' }); // Enviar un mensaje de error
    }
    next(); // Llamar al siguiente middleware o ruta
});
const port = process.env.PORT ; // variable de entorno, en este caso el puerto donde se ejecutará el servidor

app.listen(port, () => { // Listen se usa para Iniciar el servidor en el puerto especificado
  console.log(`Servidor iniciado en http://localhost:${port}`); // Mensaje de confirmación
});
