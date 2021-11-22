<html>
<head>
<title></title>
<link rel="icon" href="https://www.smythacademy.com/wordpress/wp-content/uploads/2017/09/shiticon.png"  type="image/png">

<style type="text/css">
	
*{
	padding:0px;
	margin: 0px auto;
}
#capapadre{
	width: 100%;
	height: 100%;
	
	position: absolute;
	overflow: hidden;
}
#hijo{
	width: 1px;
	height: 1px;
	float: left;
	
}


</style>

</head>

<body>

<div id="capapadre">


<?php

	for ($i=0; $i < 100000000; $i++) { 
		$color = dechex(rand(0x000000, 0xFFFFFF));
		echo "<div id='hijo' style='background-color:#".$color.";'></div>";
	}


	




?>

</div>
</body>
</html>