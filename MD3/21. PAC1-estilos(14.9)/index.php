<?php
//including the database connection file
include_once("config.php");

$sql = "SELECT * FROM users ORDER BY id ";
$result = $mysqli->query($sql);

?>

<html>
<head>	
	<title>Homepage</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
	<link rel="stylesheet" href="./style.css">
</head>
<style>


</style>

<body>
<div>
<a href="add.html">Add New Data</a><br/><br/>
<a href="young.php">Show young people</a><br/><br/>
<a href="old.php">Show old people</a><br/><br/>
</div>
<section id="padre">
	<?php 

	if ($result->num_rows > 0){
	while($row = $result->fetch_assoc() ) { 	
		echo "<div class='ficha'>";
		echo " <div class='block-7'>";
		echo '<div class="text-center p-4">';
		echo ' <ul class="pricing-text mb-5">';
		echo ' <li><span class="fa fa-check mr-2"></span>'.$row['id'].'</li>';
		echo ' <li><span class="fa fa-check mr-2"></span>'.$row['name'].'</li>';
		echo ' <li><span class="fa fa-check mr-2"></span>'.$row['age'].'</li>';
		echo "<img src=".$row['avatar']." style='width: 200px; height: 200px alt=error margin-top='3px'></img>";	
		echo "<br/>";
		echo '   </ul>';
		echo "<a href=\"edit.php?identidad=$row[id]\" class='btn btn-primary d-block px-2 py-3'>Editar</a>';
			<a href=\"delete.php?identidad=$row[id]\" class='btn btn-primary d-block px-2 py-3' onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a>';
		 </div>";		
		echo '</div>';
		echo '</div>';
		echo '</div>';
	}}
	?>
</section>
</body>
</html>
