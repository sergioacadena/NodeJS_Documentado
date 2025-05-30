const express = require('express'); // Importar express para crear un servidor web
const mongoose = require('mongoose'); // Importar mongoose para interactuar con MongoDB
const bodyParser = require('body-parser'); // Importar body-parser para analizar el cuerpo de las solicitudes
const { config } = require ('dotenv'); // Importar dotenv para manejar variables de entorno
config(); // Cargar las variables de entorno desde el archivo .env

const bookRoutes = require('./routes/book.routes'); // Importar las rutas de libros

//usamos express para los middlewares y las rutas
const app = express(); // Crear una instancia de la aplicación Express
app.use(bodyParser.json()); // Middleware para analizar el cuerpo de las solicitudes en formato JSON

/* aca conectamos la bd */
mongoose.connect(process.env.MONGO_URI, { // Conectar a la base de datos MongoDB usando la URI de conexión
    dbName: process.env.DB_NAME, // Nombre de la base de datos
    useNewUrlParser: true, // Usar el nuevo analizador de URL
    
})

const port = process.env.PORT ; // Puerto por defecto 3000

app.listen(port, () => { // Iniciar el servidor en el puerto especificado
  console.log(`Servidor iniciado en http://localhost:${port}`); // Mensaje de confirmación
});
