console.log("probando")

// este script cada vez lo ejecutamos, accede a la DB y hace algo

const mongoose = require("mongoose");
// .todos los elementos que tengan que ver con BD, VScode lo colorea verde

const Student = require("./models/student.model.js")

mongoose.connect("mongodb://localhost:27017/students-db")
.then((response) => {
  console.log("contados a la base de datos")

  // hacer busquedas o modificaciones en la DB
  return Student.create({
    name: 1000,
    candy: "patata",
    likesPokemon: 1000,
    pizzaToppings: {}
  }) // crear un documento
})
.then(() => {
  console.log("creado nuevo estudiante")


  return mongoose.connection.close() // cierra la conexion a la DB
})
.then(() => {
  console.log("conexión cerrada")
})
.catch((error) => {
  console.log(error)
})