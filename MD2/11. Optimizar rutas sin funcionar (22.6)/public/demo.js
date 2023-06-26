function reservar() {
  let reserva = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    dni: document.getElementById("dni").value,
    numHab: document.getElementById("numHab").value,
    fechaCheckIn: document.getElementById("checkIn").value,
    fechaCheckOut: document.getElementById("checkOut").value,
  };

  fetch("/reservas/registro", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify(reserva),
  })
    .then((res) => res.json())
    .then(function (datos) {
      document.getElementById("print").innerHTML = datos.mensaje;
    });
}
