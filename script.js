console.log("probando")

// este script cada vez lo ejecutamos, accede a la DB y hace algo

const mongoose = require("mongoose");
// .todos los elementos que tengan que ver con BD, VScode lo colorea verde

const Student = require("./models/student.model.js")

const allStudents = require("./data/students.json")
// json es data. todo archivo que sea data pura es automaticamente exportando

mongoose.connect("mongodb://localhost:27017/students-db")
.then((response) => {
  console.log("contados a la base de datos")


  // (C) CREAR
  // hacer busquedas o modificaciones en la DB
  // return Student.create({
  //   name: "Angel",
  //   pizzaToppings: ["anchoas"]
  // }) // crear un documento

  // return Student.insertMany(allStudents)

  // (R) READ
  // return Student
  // .find( { candy: { $gte: 10 } } )
  // .sort( { name: 1 } )
  // .select( { name: 1, candy: 1 } ) // solo me devuelve propiedades de name y candy

  // return Student.findOne({ likesPokemon: true })
  // return Student.findById("64cbb0d1474c032d74d31c92")


  // (U) UPDATE
  // return Student.findOneAndUpdate({ name: "Mercedes" }, { likesPokemon: true, candy: 5 }, { new: true })
  // mongoose de forma predenterminada nos devuelve el documento antes de hacer la actualizacion
  // a veces queremos el document ACTUALIZADO. Para eso, debemos agregar un tercer argumento { new: true }
  // return Student.findByIdAndUpdate("64cbb0d1474c032d74d31c92", { $push: { pizzaToppings: "piña" } })

  // (D) DELETE
  return Student.findOneAndDelete( {name: "Rubén"} )

})
.then((response) => {
  console.log("la data es", response)
  return mongoose.connection.close() // cierra la conexion a la DB
})
.then(() => {
  console.log("conexión cerrada")
})
.catch((error) => {
  console.log(error)
})