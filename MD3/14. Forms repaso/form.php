<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario Simple</title>
  </head>
  <body>
    <div>
      <h1>Formulario simple</h1>
      <form action="destino.php" method="post">
        <div>
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre"/>
        </div>
        <div>
            <label for="apellidos">Apellidos</label>
            <input type="text" id="apellidos" name="apellidos">
        </div>
        <div>
            <label for="img">Imagen de perfil</label>
            <input type="text" id="img" name="img">
        </div>
        <div>
            <input type="checkbox" id="marcar" name="marcar">
            <label for="marcar">Aceptar términos y condiciones</label>
        </div>
    </div>
    <button type="submit">Enviar</button>
    <button type="reset">Reset</button>
   </form>
</body>
</html>