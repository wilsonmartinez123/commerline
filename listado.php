<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$dns = "mysql:host=localhost;dbname=mydb";
$user = "root";
$pass = "";
try {
	$con = new PDO($dns, $user, $pass);
	if(!$con){
		echo "No se puede conectar a la base de datos";
	}		
	$query = $con->prepare('SELECT idproducto, nombre_producto, precio_producto, imagen_producto, descripcion_producto, estadoproducto_idestadoproducto, empresa_idempresa FROM producto');
		$query->execute();
		$registros = "[";		
		while($result = $query->fetch()){
			if ($registros != "[") {
				$registros .= ",";
			}
			
		
			$registros .= '{"nombre_producto": "'.$result["nombre_producto"].'",';
			$registros .= '"idproducto": "'.$result["idproducto"].'",';
			$registros .= '"estadoproducto_idestadoproducto": "'.$result["estadoproducto_idestadoproducto"].'",';
			$registros .= '"empresa_idempresa": "'.$result["empresa_idempresa"].'",';
			$registros .= '"precio_producto": "'.$result["precio_producto"].'",';
			$registros .= '"descripcion_producto": "'.$result["descripcion_producto"].'"}';	



		}
		$registros .= "]";
		echo $registros;
} catch (Exception $e) {
	echo "Erro: ". $e->getMessage();
};