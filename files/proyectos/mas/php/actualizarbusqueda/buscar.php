
<?php

$nombre=$_POST['nombre'];

$host_name="localhost";
$user_name="root";
$password="";
$database="mierda";

$enlace=mysqli_connect($host_name,$user_name,$password,$database);

if(mysqli_connect_errno()){
	echo "Error en la conexión: ".mysqli_connect_error();
}else{

	

	include('includes/conexion.php');
	$acentos=$enlace->query("SET NAMES 'utf8'");
				
	

	$query="SELECT * FROM numeros WHERE nombre LIKE '$nombre%'";
	
	
	if ($result=mysqli_query($enlace,$query)) {

	
					while ($fila=mysqli_fetch_array($result)) {
                        echo "<div class='hijo'>";
						echo "<strong>Datos del perfil:</strong><br><br>";
						echo "<strong>Id:</strong>".$fila['id']."<br><br>";
						echo "<strong>nombre:</strong>".$fila['nombre']."<br><br>";		
                        echo "</div>";			
					}
    }else{echo $query;}

}



?>