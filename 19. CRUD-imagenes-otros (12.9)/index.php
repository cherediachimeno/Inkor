<?php
//including the database connection file
include_once("config.php");

$sql = "SELECT * FROM users ORDER BY id ";
$result = $mysqli->query($sql);
?>

<html>
<head>	
	<title>Homepage</title>
</head>
<style>

	#padre {
		display: flex;
		flex-wrap: wrap;
	}

	.ficha {
		width: 250px;
		border: 2px solid black; 
		margin: 5px; 
		padding: 3px;
		background-color: rgb(201, 201, 215);
		text-align: center;
	}

	.ficha:hover {
		background-color: rgb(186, 186, 218);
	}
</style>

<body>
<a href="add.html">Add New Data</a><br/><br/>
<a href="young.php">Show young people</a><br/><br/>
<a href="old.php">Show old people</a><br/><br/>

	<div id="padre">
	<?php 
	if ($result->num_rows > 0){
	while($row = $result->fetch_assoc() ) { 		
		echo "<div class='ficha'>";
		echo "<h4>".$row['id']."</h4>";
		echo "<h2>".$row['name']."</h2>";
		echo "<p>".$row['age']."</p>";
		echo "<img src=".$row['avatar']." style='width: 200px; height: 200px' alt='error'></img>";	
		echo "<br/>";
		echo "<a href=\"edit.php?identidad=$row[id]\">Edit</a>
		 | <a href=\"delete.php?identidad=$row[id]\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a>
		 </div>";		
	}}
	?>
</body>
</html>
