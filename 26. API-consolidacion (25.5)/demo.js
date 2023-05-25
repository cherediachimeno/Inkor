// USAREMOS LA API RANDOM USER
let resultado,
  titleName,
  firstName,
  lastName,
  fullName,
  streetName,
  streetNumber,
  city,
  state,
  country,
  postcode,
  fulldirection,
  foto;

function llamarAPI() {
  fetch("http://randomuser.me/api/")
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerData(datos) {
      // aquí tengo datos, en datos tengo el objeto results
      // con los datos de un random user
      resultado = datos.results;
      // para evitar el uso de valores/variables tan largos
      // como estos: resultado[0].location.street.number; resultado[0].location.street.name
      // resultado[0].name.title, los vamos a guardar en variables
      // más concisas
      titleName = resultado[0].name.title;
      firstName = resultado[0].name.first;
      lastName = resultado[0].name.last;
      fullName = `${titleName} ${firstName} ${lastName}`;
      mail = resultado[0].email;
      streetName = resultado[0].location.street.name;
      streetNumber = resultado[0].location.street.number;
      city = resultado[0].location.city;
      state = resultado[0].location.state;
      country = resultado[0].location.country;
      postcode = resultado[0].location.postcode;
      fulldirection = `${streetName} ${streetNumber} ${city} ${state} ${country} ${postcode}`;
      foto = resultado[0].picture.large;
      printRandomUser(fullName, foto, mail, fulldirection);
    });
}

function printRandomUser(nombre, foto, mail, direccion) {
  document.getElementById("print").innerHTML += `
  <div id="persona">
  <img src="${foto}" alt="foto persona">
  <h1>${nombre}</h1>
  <p>${mail}</p>
  <p>${direccion}</p>
    </div>
    `;
}
