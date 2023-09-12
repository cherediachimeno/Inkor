<?php
// including the database connection file
include_once("config.php");

if(isset($_POST['update']))
{	
	$id = $mysqli->real_escape_string($_POST['id']);
	$name = $mysqli->real_escape_string($_POST['name']);
	$age = $mysqli->real_escape_string($_POST['age']);
	$email = $mysqli->real_escape_string($_POST['email']);
	
	// checking empty fields
	if(empty($name) || empty($age) || empty($email)) {	
			
		if(empty($name)) {
			echo "<font color='red'>Name field is empty.</font><br/>";
		}
		
		if(empty($age)) {
			echo "<font color='red'>Age field is empty.</font><br/>";
		}
		
		if(empty($email)) {
			echo "<font color='red'>Email field is empty.</font><br/>";
		}		
	} else {	
		//updating the table
		$sql = "UPDATE users SET name='$name',age='$age',email='$email' WHERE id=$id";
		$result = $mysqli->query($sql);
		//redirectig to the display page. In our case, it is index.php
		header("Location: index.php");
	}
}
?>
<?php
//getting id from url
$id = $_GET['identidad'];

//selecting data associated with this particular id

$sql = "SELECT * FROM users WHERE id=$id";
$result = $mysqli->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ) { 
	$name = $row['name'];
	$age = $row['age'];
	$email = $row['email'];
}
}

?>
<html>
<head>	
	<title>Edit Data</title>
</head>

<body>
	<a href="index.php">Home</a>
	<br/><br/>
	
	<form name="form1" method="post" action="edit.php">
		<table border="0">
			<tr> 
				<td>Name</td>
				<td><input type="text" name="name" value="<?php echo $name;?>"></td>
			</tr>
			<tr> 
				<td>Age</td>
				<td><input type="text" name="age" value="<?php echo $age;?>"></td>
			</tr>
			<tr> 
				<td>Email</td>
				<td><input type="text" name="email" value="<?php echo $email;?>"></td>
			</tr>
			<tr>
				<td><input type="hidden" name="id" value=<?php echo $_GET['identidad'];?>></td>
				<td><input type="submit" name="update" value="Update"></td>
			</tr>
		</table>
	</form>
</body>
</html>
