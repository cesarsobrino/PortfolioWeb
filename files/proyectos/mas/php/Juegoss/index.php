<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
			
body{
	background-color: grey;
}

	#padrisimo{
		position: absolute;
		width: 1800px;
		left: 50%;
		margin-left:-900px;
		
	}

			#padre{
				width:1800px;
				min-height: 400px;
					/*border:2px solid black;*/
				float:left;
				
			}
			#padre2{
				width:1800px;
				min-height: 400px;
				/*border:2px solid black;*/
				float:left;
				
			}
			#hijos{
				width: 300px;
				height: 400px;
				border:2px solid black;
				float: left;
				box-sizing: border-box;
				margin-left:50px;
				margin-top:50px;
				transition: all 0.4s;
				background-size: cover;
				
			}
			#preciodescuento{
				width: 300px;
				height: 40px;
				background: rgb(2,0,36);
 background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 83%);
 				float: left;
 				margin-top:320px;
	
			}
			#hijos:hover{
				transform: scale(1.1);
			}
			#descuento{
				width: 56px;
				height: 25px;
				float:left;
				background-color: green;
				color:white;
				margin-top:15px;
				font-size: 25px;
			}
			#precio{
				width: 60px;
				height: 25px;
				float:right;
				margin-right:20px;
				font-size: 25px;
				margin-top:13px;
				color:white;
			}
				#progreso{
				width: 200px;
				height: 40px;
				background-color:green;
				float:left;
				margin-top:-220px;
				margin-left:40px;
				color:white;
				font-weight: bold;
				font-size:30px;

				
			}
			#nombredeg{
				width: 300px;
				height: 40px;
				background: rgb(2,0,36);
 background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0) 83%);
 				float: left;
 				color:white;
 				font-size:20px;

			}
			#fc{
				width: 100px;
				height: 25px;
				float: left;
				margin-left:40px;
				margin-top:13px;
				background-color: orange;
				border-top-right-radius:10px;
				border-top-left-radius: 10px;
				color:white;
				font-size:20px;
				font-weight: bold;
			}
		
h1{
	margin-top:100px;
}


	</style>
	
</head>
<body>
	<center><h1> NO JUGADOS:</h1></center>
	<div id="padrisimo">

	<div id="padre">
		
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
				$query="SELECT * FROM juegos WHERE jugado=0";
				if ($result=mysqli_query($enlace,$query)) {

					


					while ($fila=mysqli_fetch_array($result)) {
						echo "<a href='".$fila['link']."' target='_blank'><div id='hijos' style='background-image:url(images/".$fila['imagen'].");' >";
						echo "<div id='nombredeg'>";
						echo "<center>".$fila['nombre']."</center>";
						echo "</div>";
						echo "<div id='preciodescuento'>";
						if (empty($fila['precio'])) {
							echo "<div id='precio'>N/A</div>";					
						echo "<div id='descuento'>N/A</div>";
						}else{
						echo "<div id='precio'>".$fila['precio']."€</div>";					
						echo "<div id='descuento'>-".$fila['descuento']."%</div>";}
						if (empty($fila['dia']) OR empty($fila['mes'])) {
							
						}else{
						
        
echo "<div id='fc'>";
echo "<center>";
echo "<script type='text/javascript'>";
	
echo	 "var Hoy=new Date();";

     echo "var Nav=new Date(Hoy.getFullYear(),".$fila['mes'].",".$fila['dia'].");";

 echo     "var mseg_dia=1000*60*60*24;";

  echo    "var dias;";
      
  echo   " var meses;";

  echo  "  var dias2;";

  echo   " if (Hoy.getMonth()==11 && Hoy.getDate()>25); ";

 echo        " Nav.setFullYear(Nav.getFullYear()+1); ";

  echo   " dias = Math.ceil((Nav.getTime()-Hoy.getTime())/(mseg_dia));";

  echo "dias = dias-365;";

  echo   " meses=(dias/30)-1;";

  echo   " meses=Math.trunc(meses);";

  echo   " dias2=(dias%30);";
		
   
    echo  "document.write(meses+'m'+dias2+'d');";

	echo "</script></div>";
					}
						echo "</center>";
						echo "</div>";
						//echo "<strong>Portada:</strong><img width='250px' heigth='250px'src='images/".$fila['imagen']."'><br><br>";
						//echo "<a href='mostraruno.php?id=".$fila['id']."'>Verlo solo</a>";
						if ($fila['progreso']==1){
						 	echo "<div id='progreso'><center>EN PROGESO</center></div>";
						 } 
						echo "</div></a>";
					}
					
				}

				/*
				
*/
}






	?>
	
	</div>
	
	

	<div id="padre2">
		<center><h1>JUGADOS:</h1></center>

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
				$query="SELECT * FROM juegos WHERE jugado=1";
				if ($result=mysqli_query($enlace,$query)) {

					


					while ($fila=mysqli_fetch_array($result)) {
						echo "<a href='".$fila['link']."' target='_blank'><div id='hijos' style='background-image:url(images/".$fila['imagen'].");' >";
						echo "<div id='nombredeg'>";
						echo "<center>".$fila['nombre']."</center>";
						echo "</div>";
						echo "<div id='preciodescuento'>";
						echo "<div id='precio'>".$fila['precio']."€</div>";					
						echo "<div id='descuento'>-".$fila['descuento']."%</div>";
						echo "</div>";
						//echo "<strong>Portada:</strong><img width='250px' heigth='250px'src='images/".$fila['imagen']."'><br><br>";
						//echo "<a href='mostraruno.php?id=".$fila['id']."'>Verlo solo</a>";
						echo "</div></a>";
					}
					
				}

				/*
				
*/
}

?>



	</div>

</div>

</body>
</html>