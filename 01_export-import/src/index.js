/* lo que importo con require (VERSION ANTIGUA) lo debo alamacenar en una variable para poder usarlo con punto (funciones.funcion()) */
//const {getAuthor, getTitle} = require('./functions'); // Importa el archivo functions.js para utilizar sus funciones y su código como quiera
//const objetos = require('./objects'); // Importa el archivo objetcts.js para utilizar sus objetos y su código como quiera

/* El import (VERSION MODERNA) el json debe tener type modul */
import {getAuthor, getTitle} from './functions.js'; // Importa Version moderna las funciones getAuthor y getTitle del archivo functions.js
import {curso} from './objects.js'; // Importa el objeto curso del archivo objects.js

console.log(getTitle()); // Llama a la función getTitle() del archivo functions.js y muestra su resultado en la consola
console.log(getAuthor(curso.autor)); // Llama a la función getAuthor() del archivo functions.js y muestra su resultado en la consola