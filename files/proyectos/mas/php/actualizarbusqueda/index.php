<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script type="text/javascript">
    function cambiar(){
        var nombre=document.getElementById("nombre").value;
        var nombres='nombre'+nombre;


        $.ajax({
            type: "post",
            url:"buscar.php",
            data:{"nombre":nombre},
            success:function(resp){
                $("#hola").html(resp);
            }
        });
        return false;
    }
</script>
<style>
    #hola{
        width:800px;
        min-height:400px;
        border:1px solid black;
        position: absolute;
        left:50%;
        margin-left:-400px;
        margin-top:100px;
    }
    .hijo{
        width:200px;
        height:200px;
        border:2px solid black;
        float:left;
        box-sizing:border-box;
        
   align-items: center;
    }
</style>
</head>
<body>

<br><br>
<center>ESCRIBA EL NOMBRE:<input type="text" id="nombre" onkeyup="return cambiar()"></center>

<div id="hola">

<?php

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
				
	

	$query="SELECT * FROM numeros";
	
	
	if ($result=mysqli_query($enlace,$query)) {

	
					while ($fila=mysqli_fetch_array($result)) {
						echo "<div class='hijo'>";
						echo "<strong>Datos del perfil:</strong><br><br>";
						echo "<strong>Id:</strong>".$fila['id']."<br><br>";
						echo "<strong>nombre:</strong>".$fila['nombre']."<br><br>";		
                        echo "</div>";						
					}
    }else{echo "no funciona";}

}



?>
</div>


    
</body>
</html>