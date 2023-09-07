<?php

$search = $_POST['buscador'];

$servername = "localhost";
$username = "inkor";
$password = "inkor";
$db = "staff";

$conn = new mysqli($servername, $username, $password, $db);

if ($conn->connect_error){
	die("Connection failed: ". $conn->connect_error);
}

$sql = "SELECT * FROM college WHERE first_name LIKE '%$search%'";

$result = $conn->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ){
	echo '<div class="ficha" style="background-color: lightgrey; width: 200px; margin: 10px; border: black solid 2px">'
	.$row["first_name"]. '<br>'
	.$row["last_name"]. '<br>'
	.$row["gender"]. '<br>'
	.$row["address"]. '<br>'
	.$row["email"].'
	</div>';
}
} else {
	echo "0 records";
}

$conn->close();

?>