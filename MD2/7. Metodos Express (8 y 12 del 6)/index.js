const express = require("express");
const app = express();
app.use(express.static("public"));

// INSTRUCCIONES NUEVAS PARA HACER POSIBLE EL USO DE JSON
app.use(express.json());
// INSTRUCCIONES NUEVAS PARA PASAR DATOS POR BODY
app.use(express.urlencoded({ extended: false }));

const especies = require("./array");

app.get("/especies", (req, res) => {
  res.send(especies);
});

app.post("/especies", (req, res) => {
  let nuevoPersonaje = {
    especie: req.body.especie,
    mundo: req.body.mundo,
    imagen: req.body.imagen,
  };

  especies.push(nuevoPersonaje);
  res.send(especies);
});

app.put("/especies", (req, res) => {
  let especie = req.body.especie; // Kel Dor
  let mundo = req.body.mundo; // STAR WARS
  let imagen = req.body.imagen;
  let coincidencia = false;

  for (let i = 0; i < especies.length; i++) {
    if (especie == especies[i].especie) {
      especies[i].mundo = mundo;
      especies[i].imagen = imagen;
      coincidencia = true;
    }
  }

  if (coincidencia) {
    res.send("Se ha editado correctamente");
  } else {
    res.send("error, no encontrado");
  }
});

app.delete("/especies", (req, res) => {
  let especie = req.body.especie;
  let coincidencia = false;
  for (let i = 0; i < especies.length; i++) {
    if (especie == especies[i].especie) {
      especies.splice(i, 1); // es una especie de cortar y pegar.
      coincidencia = true;
    }
  }
  res.send("probando");
});

app.listen(3000);
