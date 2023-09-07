<?php
// Include config file
require_once "config.php";
 
// Define variables and initialize with empty values
$titulo = $plataforma = $precio = "";
$titulo_err = $plataforma_err = $precio_err = "";
 
// Processing form data when form is submitted
if(isset($_POST["id"]) && !empty($_POST["id"])){
    // Get hidden input value
    $id = $_POST["id"];
    
    // Validate title
    $input_name = trim($_POST["titulo"]);
    if(empty($input_name)){
        $titulo_err = "Introduce un título";
    } elseif(!filter_var($input_name, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^[a-zA-Z\s]+$/")))){
        $titulo_err = "Introduce un título válido";
    } else{
        $titulo = $input_name;
    }
    
    // Validate address
    $input_address = trim($_POST["plataforma"]);
    if(empty($input_address)){
        $plataforma_err = "Por favor introduce plataforma.";     
    } else{
        $plataforma = $input_address;
    }
    
    // Validate salary
    $input_salary = trim($_POST["precio"]);
    if(empty($input_salary)){
        $precio_err = "Por favor introduce precio.";     
    } elseif(!ctype_digit($input_salary)){
        $precio_err = "Por favor introduce un número entero";
    } else{
        $precio = $input_salary;
    }
    
    // Check input errors before inserting in database
    if(empty($name_err) && empty($plataforma_err) && empty($precio_err)){
        // Prepare an update statement
        $sql = "UPDATE juegos SET titulo=?, plataforma=?, precio=? WHERE id=?";
 
        if($stmt = $mysqli->prepare($sql)){
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("sssi", $param_name, $param_address, $param_salary, $param_id);
            
            // Set parameters
            $param_name = $titulo;
            $param_address = $plataforma;
            $param_salary = $precio;
            $param_id = $id;
            
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                // Records updated successfully. Redirect to landing page
                header("location: index.php");
                exit();
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
         
        // Close statement
        $stmt->close();
    }
    
    // Close connection
    $mysqli->close();
} else{
    // Check existence of id parameter before processing further
    if(isset($_GET["id"]) && !empty(trim($_GET["id"]))){
        // Get URL parameter
        $id =  trim($_GET["id"]);
        
        // Prepare a select statement
        $sql = "SELECT * FROM juegos WHERE id = ?";
        if($stmt = $mysqli->prepare($sql)){
            // Bind variables to the prepared statement as parameters
            $stmt->bind_param("i", $param_id);
            
            // Set parameters
            $param_id = $id;
            
            // Attempt to execute the prepared statement
            if($stmt->execute()){
                $result = $stmt->get_result();
                
                if($result->num_rows == 1){
                    /* Fetch result row as an associative array. Since the result set
                    contains only one row, we don't need to use while loop */
                    $row = $result->fetch_array(MYSQLI_ASSOC);
                    
                    // Retrieve individual field value
                    $name = $row["titulo"];
                    $address = $row["plataforma"];
                    $salary = $row["precio"];
                } else{
                    // URL doesn't contain valid id. Redirect to error page
                    header("location: error.php");
                    exit();
                }
                
            } else{
                echo "Oops! Something went wrong. Please try again later.";
            }
        }
        
        // Close statement
        $stmt->close();
        
        // Close connection
        $mysqli->close();
    }  else{
        // URL doesn't contain id parameter. Redirect to error page
        header("location: error.php");
        exit();
    }
}
?>
 
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Update Record</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        .wrapper{
            width: 600px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                <h2 class="mt-5">Edita videojuego</h2>
                    <p>Introduce los datos del videojuego que vamos a introducir</p>
                    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                        <div class="form-group">
                            <label>Título</label>
                            <input type="text" name="titulo" class="form-control <?php echo (!empty($titulo_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $titulo; ?>">
                            <span class="invalid-feedback"><?php echo $titulo_err;?></span>
                        </div>
                        <div class="form-group">
                            <label>Plataforma</label>
                            <textarea name="plataforma" class="form-control <?php echo (!empty($plataforma_err)) ? 'is-invalid' : ''; ?>"><?php echo $plataforma; ?></textarea>
                            <span class="invalid-feedback"><?php echo $plataforma_err;?></span>
                        </div>
                        <div class="form-group">
                            <label>Precio</label>
                            <input type="text" name="precio" class="form-control <?php echo (!empty($precio_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $precio; ?>">
                            <span class="invalid-feedback"><?php echo $precio_err;?></span>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Submit">
                        <a href="index.php" class="btn btn-secondary ml-2">Cancel</a>
                    </form>
                </div>
            </div>        
        </div>
    </div>
</body>
</html>