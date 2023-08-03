const mongoose = require("mongoose")

// aqui vamos a crear el ESQUEMA
// lo que da formato a los documentos de estudiantes. Dar validaciones.
let studentSchema = new mongoose.Schema({
  name: String,
  candy: Number,
  likesPokemon: Boolean,
  pizzaToppings: [ String ]
})

// ["pepperoni", "tomate", "piña"]

// aqui vamos a crear el MODELO
// la herramienta que accede a la collecion de estudiantes

const Student = mongoose.model("Student", studentSchema) 
//                                |
//                  el nombre interno del modelo

module.exports = Student
// lo exportamos para poder usarlo en otros archivos del repositorio