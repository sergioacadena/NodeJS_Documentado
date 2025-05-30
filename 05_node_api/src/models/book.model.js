/*La carpeta Models Es como si creara objetos dentro de JS que traen la info de la BD, 
y que cada objeto se comporta como una tabla de la BD... es darle forma de objetos a las tablas de mi BD
así es mas facil de leerlas en el front */

const mongoose = require('mongoose'); // Importar mongoose para interactuar con MongoDB

const bookSchema = new mongoose.Schema( // Definir el esquema del libro, como una tbla Libros de mi BD
    { 
         title: String, // Título del libro
         author: String, // Autor del libro
         genre: String, // Género del libro
         publication_date: String, // Fecha de publicación del libro
    }
)
/* se expora así para que se entienda como un modelo de Mongo DB */
module.exports = mongoose.model('Book', bookSchema); 
