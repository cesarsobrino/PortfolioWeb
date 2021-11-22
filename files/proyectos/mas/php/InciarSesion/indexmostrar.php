<!DOCTYPE html>
<html>
<head>
	<title></title>
<style type="text/css">
	*{margin:0px auot;}
</style>
</head>
<body>
<center>

</center>

<?php

$host_name="localhost";
$user_name="root";
$password="";
$database="discoteca";

$enlace=mysqli_connect($host_name,$user_name,$password,$database);

if(mysqli_connect_errno()){
	echo "Error en la conexión: ".mysqli_connect_error();
}else{

	

	include('includes/conexion.php');
	$acentos=$enlace->query("SET NAMES 'utf8'");
				
	

	$query="SELECT * FROM usuarios WHERE usuario='$_GET[nombre]' AND contrasena='$_GET[contrasena]'";
	
	
	if ($result=mysqli_query($enlace,$query)) {

	
					while ($fila=mysqli_fetch_array($result)) {
						echo "<strong>Datos del perfil:</strong><br><br>";
						echo "<strong>Usuario:</strong>".$fila['usuario']."<br><br>";
						echo "<strong>Edad:</strong>".$fila['edad']."<br><br>";
						echo "<strong>Fecha de nacimiento:</strong>".$fila['fechanaz']."<br><br>";
						echo "<strong>Nombre:</strong>".$fila['nombre']."<br><br>";
						echo "<strong>Apellidos:</strong>".$fila['apellidos']."<br><br>";
						echo "<a href='index.php'><input type='button' value='volver'></a>";
						
						
					}
				
				



}else{echo "no funciona";}

}


?>


</body>
</html>