/* La carpeta routes (rutas) es donde organizas las direcciones URL que tu servidor va a responder.
Cada archivo dentro de esa carpeta representa un conjunto de caminos o endpoints 
para acceder a diferentes partes de tu aplicación. */
const express = require('express'); // Importar express para crear un servidor web
const router = express.Router(); // Crear un enrutador de Express para manejar las rutas
const Book = require('../models/book.model'); // Importar el esquema del libro o la tabla de libros

/* MIDDLEWARE */

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
const getBook = async (req, res, next) => {
    let book;
    const { id } = req.params; // Obtener el ID del libro de los parámetros de la solicitud
    if (!id.match(/^[0-9a-fA-F]{24}$/)) { // Validar que el ID sea un ObjectId de MongoDB
        return res.status(400).json({ message: 'ID de libro inválido' }); // Manejar el caso en que el ID no es válido
    }
    try {
        book = await Book.findById(id); // Buscar el libro por su ID en la base de datos
        if (!book) {
            return res.status(404).json({ message: 'Libro no encontrado' }); // Manejar el caso en que no se encuentra el libro
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el libro' }); // Manejar errores y enviar un mensaje de error
    }
    res.book = book; // Guardar el libro encontrado en la respuesta para que esté disponible en las siguientes rutas
    next(); // Llamar al siguiente middleware o ruta
}

/* Obtener todos los libros GET*/

router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Buscar todos los libros en la base de datos
        console.log(books); // Mostrar los libros encontrados en la consola
        if (books.length === 0) {
             return res.status(204).json({ message: 'No se encontraron libros' }); // Manejar el caso en que no hay libros
        }
        res.json(books); // Enviar la lista de libros como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros' }); // Manejar errores y enviar un mensaje de error
    }
});

/* Crear un nuevo libro POST*/
router.post('/', async (req, res) => {
   const { title, author, genre, publication_date } = req?.body; // Desestructurar los datos del libro del cuerpo de la solicitud
   if (!title || !author || !genre || !publication_date) {
        return res.status(400).json({ message: 'Faltan datos del libro, todos los datos son obligatorios' }); // Manejar el caso en que faltan datos
   }
   const Book = new Book({ // Crear una nueva instancia del modelo Book con los datos proporcionados
        title,
        author,
        genre,
        publication_date
   });
   try {
        const newBook = await Book.save(); // Guardar el libro en la base de datos
        console.log(newBook); // Mostrar el libro guardado en la consola
        res.status(201).json(savedBook); // Enviar el libro guardado como respuesta con estado 201 (Creado)
   } catch (error) {
        res.status(500).json({ message: 'Error al guardar el libro' }); // Manejar errores y enviar un mensaje de error
   }
});