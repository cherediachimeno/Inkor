<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    // 1º PASO - Conectarnos a la base de datos
        $user = "inkor";
        $password = "inkor";

        // Además del user y del pass, utilizaremos una variable
        // que englobará la conexión
        $connection = mysqli_connect("localhost", $user, $password, "libros");

    // 2º PASO - Ver si hay algún error
        if($connection === false){
            die("Error no se puede connectar " . mysqli_connect_error());
        }

    
    // 3º PASO - Obtenemos información del formulario
        $titulo = $_REQUEST["titulo"];
        $autor = $_REQUEST["autor"];
        $anyo = $_REQUEST["anyo"];
        $isbn = $_REQUEST["isbn"];

    // 4º PASO - Introducir instrucciones SQL.
        $sql = "INSERT INTO fantasía VALUES(
            '$titulo',
            '$autor',
            '$anyo',
            '$isbn'
            )";

    // 5º PASO - Ejecutar instrucciones SQL
        
            if(mysqli_query($connection, $sql)){
                echo "datos guardados correctamente";
            } else {
                echo "error!!!!!!" . mysqli_error($connection);
            }

    // 6º PASO - Cerrar conexión
    mysqli_close($connection);
    
    ?>
</body>
</html>