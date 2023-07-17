<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de películas</title>
</head>
<body>
    <h1>¿Qué teléfono vas a comprar?</h1>
    </br>
    <form method="post" action="respuesta.php">
    <label for="phone">Sistema operativo</label>
    <select id="phone" name="phone">
    <option value="android">Android</option>
    <option value="iphone">Iphone</option>
    </select>
    <label for="year">Año</label>
    <select id="year" name="year">
    <option value="2023">2023</option>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    </select>
    <input type="submit" name="enviar">
    </form>

    
</body>
</html>