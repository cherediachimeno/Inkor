const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hola Mundo desde Express v2</h1>");
});

app.get("/calcular/:num", (req, res) => {
  let num = req.params.num;
  if (num >= 18) {
    res.send(`<h1>Mayor de edad</h1>`);
  } else {
    res.send(`<h1>MENOR de edad</h1>`);
  }
});

app.listen(3000);
