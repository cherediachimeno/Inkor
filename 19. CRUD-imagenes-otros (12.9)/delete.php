<?php
//including the database connection file
include("config.php");

//getting id of the data from url
$id = $_GET['identidad'];

//deleting the row from table
$sql = "DELETE FROM users WHERE id=$id";
$result = $mysqli->query($sql);

//redirecting to the display page (index.php in our case)
header("Location:index.php");
?>

