<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario conectado con las base de datos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h2>Guarda la información de tu libro preferido</h2>
    <form action="insert.php" method="POST">
        <label for="titulo">Título:</label>
        <input type="text" name="titulo" id="titulo">
        <br>
        <label for="autor">Autor:</label>
        <input type="text" name="autor" id="autor">
        <br>
        <label for="anyo">Año:</label>
        <input type="number" name="anyo" id="anyo">
        <br>
        <label for="isbn">ISBN:</label>
        <input type="number" name="isbn" id="isbn">
        <br>
        <input class="btn btn-info" type="submit" value="submit">
        <input class="btn btn-warning" type="reset">
    </form>
</body>
</html>