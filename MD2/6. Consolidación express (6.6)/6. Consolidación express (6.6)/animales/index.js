const express = require("express");
const app = express();
app.use(express.static("public"));
const animales = require("./animales"); // array de objetos importado

app.get("/animales", (req, res) => {
  let html = `<ul>`;
  for (let i = 0; i < animales.length; i++) {
    html += `
    <li>Nombre: <strong>${animales[i].nombre}</strong></li>
    <li>Edad: ${animales[i].edad}</li>
    <li>Tipo: ${animales[i].tipo}</li>
    <br>
    `;
  }

  html += `</ul>`;
  res.send(html);
});

// falta diseñar ruta sumar-animal que me selecciona la información que me viene por el query a partir
// del formulario

app.get("/sumar-animal", (req, res) => {
  /*let nom = req.query.nombre;
  let edat = req.query.edad;
  let tipus = req.query.tipo;*/

  let objetoLiteral = {
    nombre: req.query.nombre,
    edad: req.query.edad,
    tipo: req.query.tipo,
  };

  animales.push(objetoLiteral);
  res.send(
    `<h3>Animal añadido correctamente, ve a la ruta animales para comprobarlo<h3>
    <form action="/animales">
        <button type="submit">Ver ruta animales</button>
    </form>`
  );
});

app.get("/adoptar", (req, res) => {
  // ME GUARDO EL ANIMAL QUE EL USUARIO QUIERE BORRAR EN LA VARIABLE ANIMAL
  let animal = req.query.animal;
  console.log(animal);

  // RECORRO EL ARRAY (ANIMALES) Y EN CASO DE QUE EXISTA COINCIDENCIA, MIRO DE BORRARLO

  for (let i = 0; i < animales.length; i++) {
    if (animales[i].nombre == animal) {
      // AL DETECTAR COINCIDENCIA EN EL NOMBRE, HAGO UN SPLICE (CORTAR Y PEGAR).
      // SELECCIONO EL INDICE QUE QUIERO BORRAR, ES DECIR, EL DE LA VUELTA CONCRETA
      // SI HA DETECTADO QUE EN LA VUELTA 2, EN EL INDICE 2, HAY COINCIDENCIA, PUES HAGO
      // UN SLICE DE ESE INDICE 2, Y CORTO 1 ELEMENTO (ES DECIR, UN INDICE)

      animales.splice(i, 1);
      res.send(
        `<h3>Animal borrado correctamente, ve a la ruta animales para comprobarlo<h3>
        <form action="/animales">
        <button type="submit">Ver ruta animales</button>
      </form>`
      );
    }
  }
  res.send(`<h3>Animal NO encontrado</h3>
  <form action="/animales">
        <button type="submit">Ver ruta animales</button>
      </form>
  `);
});

app.listen(3000);
