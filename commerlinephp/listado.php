<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$dns = "mysql:host=localhost;dbname=commerline";
$user = "root";
$pass = "";
try {
	$con = new PDO($dns, $user, $pass);
	if(!$con){
		echo "No se puede conectar a la base de datos";
	}		
	$query = $con->prepare('SELECT nombre_prod, precio_prod, imagen_prod, descripcion_prod FROM producto');
		$query->execute();
		$registros = "[";
		while($result = $query->fetch()){
			if ($registros != "[") {
				$registros .= ",";
			}
			
		
			$registros .= '{"nombre_prod": "'.$result["nombre_prod"].'",';
			$registros .= '"precio_prod": "'.$result["precio_prod"].'",';
			$registros .= '"imagen_prod": "'.$result["imagen_prod"].'",';
			$registros .= '"descripcion_prod": "'.$result["descripcion_prod"].'"}';	



		}
		$registros .= "]";
		echo $registros;
} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};