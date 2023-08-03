const mongoose = require("mongoose")

// aqui vamos a crear el ESQUEMA
// lo que da formato a los documentos de estudiantes. Dar validaciones.
let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // el campo es obligatorio
    unique: true // evita duplicados con el mismo valor en la propiedad
  },
  candy: {
    type: Number,
    default: 1 // si no se agrega, esté será el valor predeterminado
  },
  likesPokemon: Boolean,
  pizzaToppings: [ {
    type: String,
    enum: ["piña", "peperoni", "tomate", "jamon"] // enum es los unicos posible valores aceptados
  } ]
})

// ["pepperoni", "tomate", "piña"]

// aqui vamos a crear el MODELO
// la herramienta que accede a la collecion de estudiantes

const Student = mongoose.model("Student", studentSchema) 
//                                |
//                  el nombre interno del modelo

module.exports = Student
// lo exportamos para poder usarlo en otros archivos del repositorio