<?php

require_once("Pelicula.php");

if(isset($_POST['enviar'])) {
    // RECOGIDA DE DATOS
    $titulo = $_POST['titulo'];
    $categoria = $_POST['categoria'];
    $year = $_POST['year'];
    $nota = $_POST['nota'];

    // CREAR OBJETO A PARTIR DE ESOS DATOS
    $fichaPelicula = new Pelicula($titulo, $categoria, $year, $nota);
}

if(isset($_REQUEST['modificar'])) {
    // RECOGIDA DE DATOS
    $titulo = $_REQUEST['titulo'];
    $categoria = $_REQUEST['categoria'];
    $year = $_REQUEST['year'];
    $nota = $_REQUEST['nota'];

    $fichaPelicula = new Pelicula($titulo, $categoria, $year, $nota);
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información recogida</title>
</head>
<body>
    <div>
    <h1>Datos almacenados en el objeto</h1>
        <ul>
            <li>Título: <?=$fichaPelicula->getTitulo()?></li>
            <li>Categoría: <?=$fichaPelicula->getCategoria()?></li>
            <li>Año: <?=$fichaPelicula->getYear()?></li>
            <li>Nota IMBD: <?=$fichaPelicula->getNota()?></li>
        </ul>
    </div>
    <h1>Modifica la información del objeto</h1>
    <form action="#">
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
    <input type="submit" name="modificar">
    <input type="reset">
    </form>
</body>
</html>