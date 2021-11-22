<?php
/* Datos */
 $host_name="localhost";
 $user_name="root";
 $password="";
 $database="mierda";
 $enlace=mysqli_connect($host_name,$user_name,$password,$database);
/* Para comprobar la conexion */
/* if(mysqli_connect_errno()){
 	echo "Error al conectar con la base de datos".mysqli_connect_error();
 }
 	else{
 		echo 'Acabas de conectar con la base de datos "musica"';
 		echo "<br/>";
 	}
 */


?>