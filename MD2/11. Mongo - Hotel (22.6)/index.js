const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ELEMENTOS PARA CONECTAR CON MONGODB
// SIEMPRE IGUALES. DOS FORMAS.
// MONGOOSE Y MONGO CLIENT. EMPEZAMOS CON MC POR ESTABILIDAD.

const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

// CONEXIÓN CON MONGODB VÍA MONGO CLIENT

MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, client) {
  if (err != null) {
    console.log(err);
    console.log("No se ha podido conectar con MongoDB");
  } else {
    app.locals.db = client.db("EjercicioHotel");
    console.log(
      "Conexión correcta a la base de datos EjercicioHotel de MongoDB"
    );
  }
});

// AQUÍ LAS RUTAS
app.post("/reservas/registro", function (req, res) {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let dni = req.body.dni;
  let numHab = req.body.numHab;
  let fechaCheckIn = req.body.fechaCheckIn;
  let fechaCheckOut = req.body.fechaCheckOut;

  let reserva = {
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    numHab: numHab,
    fechaCheckIn: fechaCheckIn,
    fechaCheckOut: fechaCheckOut,
  };

  req.app.locals.db
    .collection("clientes")
    .find({ dni: dni })
    .toArray(function (err, datos) {
      if (datos.length == 0) {
        res.send({ mensaje: "cliente no encontrado" });
      } else {
        // requerimos a otra colección
        app.locals.db
          .collection("habitaciones")
          .find({ numHab: parseInt(numHab) })
          .toArray(function (err, datos) {
            if (datos.length == 0) {
              res.send({ mensaje: "Error. La habitación no existe" });
            } else if (datos[0].estado == "ocupada") {
              res.send({
                mensaje: "Error. Habitación ya reservada, intente otra",
              });
            } else {
              req.app.locals.db
                .collection("habitaciones")
                .updateOne(
                  { numHab: parseInt(numHab) },
                  { $set: { estado: "ocupada" } }
                );
              req.app.locals.db
                .collection("reservas")
                .insertOne(reserva, function (err, res) {
                  res.send({ mensaje: "habitación reservada con éxito" });
                });
            }
          });
      }
    });
});

// Y EL PUERTO

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor (Express JS) conectado correctamente al puerto 3000");
});
