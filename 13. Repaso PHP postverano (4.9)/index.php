<!DOCTYPE HTML>
<html>

<head>
    <style>
        .error {
            color: #FF0000;
        }
    </style>
</head>

<body>
    <?php
    // define variables and set to empty values
    $nameErr = $emailErr = $genderErr = $websiteErr = "";
    $name = $email = $gender = $comment = $website = "";

    //VALIDACIÓN
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        
        
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } else {
            $name = test_input($_POST["name"]);
        }

        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $email = test_input($_POST["email"]);
        }

        if (empty($_POST["website"])) {
            $website = "";
        } else {
            $website = test_input($_POST["website"]);
        }

        if (empty($_POST["comment"])) {
            $comment = "";
        } else {
            $comment = test_input($_POST["comment"]);
        }

        if (empty($_POST["gender"])) {
            $genderErr = "Gender is required";
        } else {
            $gender = test_input($_POST["gender"]);
        }
    }
    // SANEAMIENTO
    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = strtolower($data);
        $dataModificada = substr($data, 0, 1);
        $restoDataModificada = substr($data, 1);
        $dataModificada = strtoupper($dataModificada);
        $data = $dataModificada . $restoDataModificada;
        $data = htmlspecialchars($data); // Carlos

        if ($data == "Carlos" || $data == "Alejandro"){
            if ($data == "Carlos") {
                $pattern = "/carlos/i";
                $data = preg_replace($pattern, "Bienvenido a la parte de gestión de la web " . $data , $data);
            } elseif ($data == "Alejandro"){
                $pattern = "/alejandro/i";
                $data = preg_replace($pattern, "Bienvenido a la parte de gestión de la web " . $data , $data);
            }
        }
        return $data;
    }
    ?>

    <h2>PHP Form Validation Example</h2>
    
    <p><span class="error">* required field</span></p>

    <form method="post">

        Name: <input type="text" name="name">
        <span class="error">* <?php echo $nameErr; ?></span>
        <br><br>

        E-mail: <input type="text" name="email">
        <span class="error">* <?php echo $emailErr; ?></span>
        <br><br>

        Website: <input type="text" name="website">
        <br><br>

        Comment: <textarea name="comment" rows="5" cols="40"></textarea>
        <br><br>

        Gender:
        <input type="radio" name="gender" value="female">Female
        <input type="radio" name="gender" value="male">Male
        <input type="radio" name="gender" value="other">Other
        <span class="error">* <?php echo $genderErr; ?></span>
        <br><br>
        <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    echo "<h2>Your Input:</h2>";
    echo $name;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $website;
    echo "<br>";
    echo $comment;
    echo "<br>";
    echo $gender;
    ?>