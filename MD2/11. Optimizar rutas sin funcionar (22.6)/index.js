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

// IMPORTACIÓN DE RUTAS Y ACTIVACIÓN.

let clientes = require("./clientes");
let habitaciones = require("./habitaciones");
let reservas = require("./reservas");

app.use("/reservas", reservas); // /registro no, pero si pongo
// /reservas/registro sí

// Y EL PUERTO

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor (Express JS) conectado correctamente al puerto 3000");
});
