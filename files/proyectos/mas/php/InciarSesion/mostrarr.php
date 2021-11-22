<html>
<head>
<title>Cesar</title>
<style type="text/css">
	
#padre{
	width: 1000px;
	min-height: 200px;
	position: absolute;
	left: 50%;
	margin-left:-500px;
	border:2px solid black;
}

#hijos{
	width: 250px;
	height: 450px;
	float: left;
	border:1px solid black;
	box-sizing: border-box;
}

</style>
</head>

<body>

	<div id="padre">


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
				$nombre=$_GET['nombre'];
				$contra=$_GET['contrasena'];
				$query3="SELECT * FROM usuarios WHERE usuario='$nombre' AND contrasena='$contra'";
				
				if ($result=mysqli_query($enlace,$query3)) {

				$filas=mysqli_num_rows($result);
					
					if ($filas>=1){

						$query="SELECT * FROM usuarios WHERE usuario='$nombre' AND contrasena='$contra'";
 					
 					if ($result=mysqli_query($enlace,$query)) {

 						while ($fila=mysqli_fetch_array($result)) {
						echo "USUARIO: ".$fila['usuario'];
						echo "<br>";
					echo "EDAD: ".$fila['edad'];
					echo "<br>";
					echo "NOMBRE Y APELLIDOS: ".$fila['nombre']." ".$fila['apellidos'];
						
						
					}
					
		}
	}
									
						
					}
				
				}
				
						
					



?>



</div>
	<a href="index.php"><input type="button" name="" value="volver"></a>
</body>

</html>