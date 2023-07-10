<?php
    if($_POST["marcar"] == "on"){
        $acepto = "si";
    } else {
        $acepto = "no";
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados</title>
</head>
<body>
    <div>
        <p>Hola <?= $_POST["nombre"] ?>, bienvenido: estos son los datos que incorporamos:</p>
        <p>Apellidos: <?= $_POST["apellidos"] ?></p>
        <p>Acepta condiciones: <?= $acepto ?></p>
    </div>
</body>
</html>