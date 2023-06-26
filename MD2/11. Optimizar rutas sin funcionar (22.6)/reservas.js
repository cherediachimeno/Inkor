const express = require("express");
const router = express.Router();

router.post("/registro", function (req, res) {
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

router.post("/about", function (req, res) {
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

router.post("/probando", function (req, res) {
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

module.exports = router;
