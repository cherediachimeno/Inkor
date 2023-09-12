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
<body>
<a href="add.html">Add New Data</a><br/><br/>

	<table width='80%' border=0>

	<tr bgcolor='#CCCCCC'>
		<td>ID</td>
		<td>Name</td>
		<td>Age</td>
		<td>Email</td>
		<td>Update</td>
	</tr>
	<?php 
	if ($result->num_rows > 0){
	while($row = $result->fetch_assoc() ) { 		
		echo "<tr>";
		echo "<td>".$row['id']."</td>";
		echo "<td>".$row['name']."</td>";
		echo "<td>".$row['age']."</td>";
		echo "<td>".$row['email']."</td>";	
		echo "<td>
		<a href=\"edit.php?identidad=$row[id]\">Edit</a>
		 | <a href=\"delete.php?identidad=$row[id]\" onClick=\"return confirm('Are you sure you want to delete?')\">Delete</a></td>";		
	}}
	?>
	</table>
</body>
</html>
