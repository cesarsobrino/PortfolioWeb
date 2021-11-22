<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


    <script type="text/javascript">
    var aux=12;
        function final() {
            
            var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        aux=aux+8;
        $.ajax({
                type: "post",
                url: "buscar.php",
                data: {
                    aux:aux
                },
                success: function(resp) {
                    $("#hola").html(resp);
                }
            });
            return false;
    }

        }

        function cambiar() {
            var nombre = document.getElementById("nombre").value;
            var nombres = 'nombre' + nombre;




            $.ajax({
                type: "post",
                url: "buscar.php",
                data: {
                    "nombre": nombre
                },
                success: function(resp) {
                    $("#hola").html(resp);
                }
            });
            return false;
        }
    </script>
    <style>
        #hola {
            width: 960px;
            min-height: 400px;
            
            position: absolute;
            left: 50%;
            margin-left: -400px;
            margin-top: 100px;
            padding-bottom: 200px;
        }

        .hijo {
            width: 200px;
            height: 400px;
            border: 2px solid black;
            float: left;
            box-sizing: border-box;
            margin:20px 20px;
            align-items: center;
            background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(181,181,181,1) 26%, rgba(238,238,238,1) 100%);
            border-radius: 40px;
            transition: all 0.4s;
            
        }

        .hijo:hover{
            transform:scale(1.1);
            cursor: pointer;
            border:2px solid white;
        }
       
       .hijo p{
           margin-left:20px;
       }
        body{
            
            background: linear-gradient(0deg, rgba(241,241,241,1) 0%, rgba(195,255,254,1) 6%, rgba(34,193,195,1) 100%) no-repeat;
            background-attachment: fixed;
        }
      
    </style>
</head>

<body onscroll="final();">

    <br><br>
  

    <div id="hola">

        <?php

        $host_name = "localhost";
        $user_name = "root";
        $password = "";
        $database = "mierda";

        $enlace = mysqli_connect($host_name, $user_name, $password, $database);

        if (mysqli_connect_errno()) {
            echo "Error en la conexión: " . mysqli_connect_error();
        } else {



            include('includes/conexion.php');
            $acentos = $enlace->query("SET NAMES 'utf8'");



            $query = "SELECT * FROM numeros LIMIT 12";


            if ($result = mysqli_query($enlace, $query)) {


                while ($fila = mysqli_fetch_array($result)) {
                    echo "<div class='hijo'>";
			echo "<p><strong>Datos del perfil:</strong></p><br><br>";
			echo "<p><strong>Id:</strong>" . $fila['id'] . "</p><br><br>";
			echo "<p><strong>nombre:</strong>" . $fila['nombre'] . "</p><br><br>";
			echo "</div>";
                }
            } else {
                echo "no funciona";
            }
        }



        ?>
    </div>



</body>

</html>