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
    app.locals.db = client.db("basetelevision");
    console.log("Conexión correcta a la base de datos television de MongoDB");
  }
});

// RUTAS
app.get("/api/series", mostrarSeries);
app.post("/api/nuevaSerie", añadirSerie);
app.get("/api/serie/:contenido", buscarSerie);

// CONTROLADOR - VER TODAS LAS SERIES
function mostrarSeries(req, res) {
  app.locals.db
    .collection("series")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
}

// CONTROLADOR - AÑADIR SERIE
function añadirSerie(req, res) {
  const serie = {
    titulo: req.body.titulo,
    plataforma: req.body.plataforma,
    nota: req.body.nota,
    descripcion: req.body.descripcion,
  };
  app.locals.db.collection("series").insertOne(serie, function (err, res) {
    if (err) throw err;
    console.log("1 documento insertedo");
  });
  res.redirect("/api/series");
}

// CONTROLADOR - BUSCAR SERIES POR TITULO

function buscarSerie(req, res) {
  // const titulo = req.params.titulo;
  const contenido = req.params.contenido;
  console.log(contenido);
  app.locals.db
    .collection("series")
    .find({
      $or: [
        { titulo: { $regex: contenido, $options: "i" } },
        { descripcion: { $regex: contenido, $options: "i" } },
      ],
    })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
}

// PUERTO

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening at http://localhost:3000`);
});
