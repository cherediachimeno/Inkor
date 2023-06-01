/* ENUNCIADO 

Crea una aplicación que simule una tienda online. 

1 --- Crea una variable almacén en la que guardes un array con objetos. ******************* HECHO
             -    Cada objeto será un departamento de la tienda y tendrás varios
                   productos en cada uno. 
            -     Cada uno de estos productos será un objeto con las siguientes
                   propiedades: nombre, precio y stock. Crea también una variable cesta.

2 ---  Crea las siguientes rutas:
            -  Dos rutas diferentes para cada uno de los departamentos de la tienda.
                               - Una ruta devolverá en la respuesta todos los productos que hay en ese
                                  departamento. Haz que se muestre en una tabla HTML.
                            - La otra ruta servirá para comprar productos. Esta ruta recibirá dos parámetros:
                               nombre del producto y cantidad. Añadir a la variable cesta el producto y la
                               cantidad seleccionada Si la cantidad pedida es mayor que el stock,
                                 devolveremos un mensaje avisando de que no hay stock suficiente.
            -  Una ruta para mostrar la cesta.
            - Una ruta para confirmar la compra. Esta ruta devolverá un mensaje de confirmación y vaciará la cesta.
*/

const express = require("express");
const app = express();
const almacen = require("./almacen");
console.log(almacen);

// DEFINIMOS RUTAS

app.get("/mujer", (req, res) => {
  res.send(
    `<table>
    <tr>
      <th>Productos del departamento ${almacen[0].departamento}</th>
    </tr>
    <tr>
      <td>${almacen[0].producto1.nombre}</td>
    </tr>
    <tr>
    <td>${almacen[0].producto2.nombre}</td>
    </tr>
    <tr>
    <td>${almacen[0].producto3.nombre}</td>
  </tr>
  </table>
    `
  );
});

app.get("/hombre", (req, res) => {
  res.send(
    `<table>
        <tr>
          <th>Productos del departamento ${almacen[1].departamento}</th>
        </tr>
        <tr>
          <td>${almacen[1].producto1.nombre}</td>
        </tr>
        <tr>
        <td>${almacen[1].producto2.nombre}</td>
        </tr>
        <tr>
        <td>${almacen[1].producto3.nombre}</td>
      </tr>
      </table>
        `
  );
});

app.get("/nino", (req, res) => {
  res.send(
    `<table>
        <tr>
          <th>Productos del departamento ${almacen[2].departamento}</th>
        </tr>
        <tr>
          <td>${almacen[2].producto1.nombre}</td>
        </tr>
        <tr>
        <td>${almacen[2].producto2.nombre}</td>
        </tr>
        <tr>
        <td>${almacen[2].producto3.nombre}</td>
      </tr>
      </table>
        `
  );
});

app.get("/comprar/nino/bodies/:parametro", (req, res) => {
  let nombre = almacen[2].producto1.nombre;
  let stock = almacen[2].producto1.stock;
  let departamento = almacen[2].departamento;
  let pedido = req.params.parametro;

  if (pedido <= stock) {
    almacen[2].producto1.stock = stock - pedido;
    stock = almacen[2].producto1.stock;
    res.send(`Estas en el departamento de ${departamento}
    Has comprado ${pedido} unidades, quedan ${stock} de ${nombre}`);
  } else {
    res.send(`Solo hay ${stock} unidades`);
  }
});

app.listen(3000);
