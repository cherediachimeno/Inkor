<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Tamagochi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body>
    <h1>Interactúa con tu tamagochi</h1>
    </br>
    <form method="POST" action="respuesta.php">
        <label for="comida">¿Qué le das de comer?</label>
            <select name="comida" id="comida">
                <option value="berenjena">Berenjena</option>
                <option value="fideos">Fideos</option>
                <option value="donut">Donut</option>
                <option value="platano">Plátano</option>
                <option value="nada">Nada</option>
            </select>
        </br>
        </br>
        <input class="btn btn-success" type="submit" name="enviar">
        <input class="btn btn-warning" type="reset">
    </form>
    <img src="https://burbujastoys.com/27263-large_default/tamagochi-pix.jpg"
    height=250px; width=250px; margin-top=100px>
</body>
</html>