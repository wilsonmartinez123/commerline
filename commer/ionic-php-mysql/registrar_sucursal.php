<?php

    Header ('Access-Control-Allow-Origin *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
    header('Content-Type: text/html; charset=utf-8');

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
    }

 

  require "dbconnect.php";
  
  $json = file_get_contents("php://input");
  $data = json_decode($json, true);
  
  $array_data = $data["sucursales"];
  //if(is_array($array_data) || is_object($array_data)){
      
    if(is_array($array_data)){
        
        foreach ($array_data as $value){
            
            $sql = "INSERT INTO sucursal (direccion_suc) VALUES ('".$value["direction"].", ".$value["municipio"].", ".$value["departamento"]."')";
            $query = $con->query($sql);
        }
    }
    
    if ($query === TRUE) {
        $response= "registro exitoso";
    } else
    {
        $response= "Error: " . $sql . "<br>" . $db->error;
    }
    echo json_encode($response);
    
             


    $con->close();
       

 
         
?>
        
         
 