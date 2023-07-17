<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de películas</title>
</head>
<body>
    <h1>Registro de películas preferidas</h1>
    </br>
    <form method="post" action="respuesta.php">
    <label for="titulo">Título de la película</label>
    <input type="text" name="titulo">
    <br>
    <label for="categoria">Categoría</label>
    <input type="text" name="categoria">
    <br>
    <label for="year">Año</label>
    <input type="number" name="year">
    <br>
    <label for="nota">Nota IMBD</label>
    <input type="number" name="nota">
    <br>
    <input type="submit" name="enviar">
    <input type="reset">
    </form>
</body>
</html>