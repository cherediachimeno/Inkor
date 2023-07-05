<?php


// CONDICIONAL QUE SE ACTIVA SI EL BOTÓN ENVIAR MANDA UNA PETICIÓN (ES DECIR, HEMOS CLICADO EN ÉL)
if(isset($_REQUEST['enviar'])){

    // SELECCIÓN DE INFORMACIÓN A TRAVÉS DEL FORM
    $seleccion = $_REQUEST['pelicula'];

    $sinopsis = match ($seleccion) {
    '1' => 'Goldfinger (en España, James Bond contra Goldfinger; en Colombia y México, 007 contra Goldfinger; en Argentina, Dedos de oro),2​ es una película británica de espionaje de 1964. Es la tercera película de James Bond, producida por Eon Productions, y también la tercera de Sean Connery como el agente ficticio del MI6 James Bond. Está basada en la novela homónima de Ian Fleming. La película también está protagonizada por Honor Blackman como la chica Bond Pussy Galore y Gert Fröbe como el antagonista Auric Goldfinger, junto a Harold Sakata como el guardaespaldas Oddjob, y Shirley Eaton como la famosa chica Bond, Jill Masterson.3​ Goldfinger fue producida por Albert R. Broccoli yHarry Saltzman y la primera de cuatro películas de la saga dirigidas por Guy Hamilton.',
    '2' => 'Raiders of the Lost Ark (titulada En busca del arca perdida en España e Indiana Jones y los cazadores del arca perdida en Hispanoamérica) es una película dirigida por Steven Spielberg y producida por George Lucas, y estrenada en 1981. Se trata de la primera película estrenada de la serie Indiana Jones, aunque es la segunda en la cronología del personaje. La trama describe la búsqueda del Arca de la Alianza por los nazis y los esfuerzos del arqueólogo Indiana Jones para evitarlo.​',
    '3' => 'El padrino (título original en inglés: The Godfather1​) es una película estadounidense de 1972 dirigida por Francis Ford Coppola. La película fue producida por Albert S. Ruddy, de la compañía Paramount Pictures. Está basada en la novela homónima (que a su vez está basada en la familia real de los Mortillaro de Sicilia, Italia), de Mario Puzo, quien adaptó el guion junto a Coppola y Robert Towne, este último sin ser acreditado.2​ Protagonizada por Marlon Brando y Al Pacino como los líderes de una poderosa familia criminal ficticia de Nueva York, la historia, ambientada desde 1945 a 1955, cuenta las crónicas de la familia Corleone liderada por Vito Corleone (Brando), enfocándose en el personaje de Michael Corleone (Pacino), y su transformación de un reacio joven ajeno a los asuntos familiares a un implacable jefe de la mafia ítalo-estadounidense.
',
    '4' => 'El Señor de los Anillos: las dos torres (título original en inglés: The Lord of the Rings: The Two Towers) es una película basada en el segundo tomo de la novela El Señor de los Anillos, del escritor británico J. R. R. Tolkien. Es la secuela de La Comunidad del Anillo y precede a la última entrega de la serie, El retorno del Rey.​'
    };

    $imagen = match ($seleccion) {
    '1' => 'https://estaticos-cdn.epe.es/clip/e0e52c90-1c37-4572-bd05-bbdd27691ee4_alta-libre-aspect-ratio_default_0.jpg',
    '2' => 'https://elcomercio.pe/resizer/1V5RuJ5Aqdb4njo-pKxqOnu32UE=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OWWONM7GR5E7NPEJVXIJORD7TM.jpg',
    '3' => 'https://cloudfront-us-east-1.images.arcpublishing.com/artear/5TFCCXAJLREVJG75FKV3ULA77A.jpg',
    '4' => 'https://pics.filmaffinity.com/the_lord_of_the_rings_the_two_towers-512899171-large.jpg',
};

    echo "<div style='border: 2px black solid; height: fit-content; width: 33%; font-size: 10px'><p>$sinopsis</p><img src='$imagen' height='100px' width='100px'></div>";
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>IMVD</h1>
    <br>
    <form action="#">
        <label for="pelicula">Selecciona tu película preferida entre estas</label>
        <select name="pelicula" id="pelicula">
            <option value="1">Goldfinger</option>
            <option value="2">Indiana Jones y el arca perdida</option>
            <option value="3">El Padrino</option>
            <option value="4">El Señor de los Anillos: las dos torres</option>
        </select>
        <br>
        <input type="submit" name="enviar">
        <input type="reset">
    </form>
</body>
</html>