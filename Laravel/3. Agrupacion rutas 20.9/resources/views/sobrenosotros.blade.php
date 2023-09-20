<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <h1>Hola {{$fundador}}</h1>
    <p>Parece que la novedad es que el {{$juego}} tiene gráficos chulos</p>
    <p>{{$empresa}}</p>
</body>
</html>