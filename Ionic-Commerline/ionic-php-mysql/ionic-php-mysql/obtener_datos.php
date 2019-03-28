<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }
	
    $mysqli = new mysqli("localhost", "root", "3809", "crawler");
    $query = "SELECT * FROM productosscraping";
    $dbresult = $mysqli->query($query);
     
    $registros = '[ "datos":';

    while($result = $dbresult->fetch_array(MYSQLI_ASSOC)){

        /*if ($registros != "[") {
				
            $registros .= ",";
        }*/
        $registros .= '{"nombre": "'.$result["nombre"].'",';
			$registros .= '"id": "'.$result["id"].'",';
			$registros .= '"categoria": "'.$result["categoria"].'",';
			$registros .= '"id_empresa": "'.$result["id_empresa"].'",';
			$registros .= '"precio": "'.$result["precio"].'",';
			$registros .= '"imagen": "'.$result["imagen"].'",';
			$registros .= '"descripcion": "'.$result["descripcion"].'"},';	

        
    }
    $registros .= "]";
     
    print_r($registros); 

    if($dbresult){
        $result = "{'success':true, 'data':" . json_encode($registros) . "}";             
    }
    else {
        $result = "{'success':false}";
    }

    //echo($result);
    //print_r($result); 

?>  