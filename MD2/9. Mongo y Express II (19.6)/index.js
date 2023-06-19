const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ELEMENTOS PARA CONECTAR CON MONGODB
// SIEMPRE IGUALES. DOS FORMAS.
// CON MONGOOSE (MÁS ACTUALIZADA) Y MONGOCLIENT (OBSOLETA DE HACE UNOS MESES)

// 1º CON MONGOOSE
//const mongoose = require("mongoose");

// CONEXIÓN CON MONGODB VÍA MONGOOSE
/*
mongoose
  .connect("mongodb://0.0.0.0:27017/", {})
  .then(() => {
    console.log("BD is now connected");
  })
  .catch((err) => {
    console.log(err);
  });*/

// 2º CON MONGO CLIENT
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

// CONEXIÓN CON MONGODB VÍA MONGO CLIENT

MongoClient.connect("mongodb://0.0.0.0:27017/", function (err, client) {
  if (err != null) {
    console.log(err);
    console.log("No se ha podido conectar con MongoDB");
  } else {
    app.locals.db = client.db("CienciaFiccion");
    console.log(
      "Conexión correcta a la base de datos CienciaFicción de MongoDB"
    );
  }
});

// AQUÍ LAS RUTAS
app.get("/planetas", function (req, res) {
  app.locals.db
    .collection("Planetas")
    .find()
    .toArray(function (err, datos) {
      if (err != null) {
        console.log(err);
      } else {
        console.log(datos);
        res.send(datos);
      }
    });
});

app.post("/planetas", (req, res) => {
  let nuevo = {
    nombre: req.body.nombre,
    lore: req.body.lore,
    sistema: req.body.sistema,
    vida: req.body.vida,
    img: req.body.img,
  };

  // AQUÍ GUARDAREMOS ESTE ELEMENTO A LA BASE DE DATOS
  // NO NECESITAMOS HACER UN PUSH PORQUE NO ES UN ARRAY
  app.locals.db.collection("Planetas").insertOne(nuevo, function (err, res) {
    if (err != null) {
      console.log(err);
    } else {
      console.log("Añadido correctamente a la colección Planetas");
    }
  });
});

// Y EL PUERTO

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor (Express JS) conectado correctamente al puerto 3000");
});
