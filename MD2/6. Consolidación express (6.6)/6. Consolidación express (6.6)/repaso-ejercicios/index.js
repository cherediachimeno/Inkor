const express = require("express");
const app = express();
app.use(express.static("public")); // uso de elementos estáticos (carpeta public)

app.get("/bienvenido", (req, res) => {
  res.send("bienvenido a la ruta raíz");
});

app.get("/redireccion", (req, res) => {
  res.sendFile(__dirname + "/public/redireccion.html");
});

app.get("/uno/:parameter", (req, res) => {
  let numero = parseInt(req.params.parameter);
  if (numero >= 18) {
    res.send(
      "bienvenido, eres mayor de edad, tu edad es de " + req.params.parameter
    );
  } else {
    res.sendFile(__dirname + "/public/redireccion.html");
  }
});

app.get("/dos/:params1/:params2", (req, res) => {
  res.send(
    "bienvenido, los parámetros introducidos son " +
      req.params.params1 +
      " y " +
      req.params.params2
  );
});

app.listen(3000);
