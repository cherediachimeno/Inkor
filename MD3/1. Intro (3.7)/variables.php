<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $numero_entero = 10;
    $videojuego = "Final Fantasy XVI";
    $tren = "Renfe UT 447";
    $estoyEstudiando = true;
    $num1 = 10;
    $num2 = 5;
    $total = $num1+$num2;

    echo "$videojuego está muy bien </br>";
    echo "El tren $tren tiene muchos años, concretamente tiene " . ($num1 + $num2) . " años</br>";
    echo "¿Estoy estudiando? En booleano sería un $estoyEstudiando<br/>";

    $mi_array[] = array(23, 33, 43, 53);
    print_r($mi_array)

    ?>
</body>
</html>