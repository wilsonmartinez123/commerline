<?php

Header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
header('Content-Type: text/html; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    exit(0);
}

require "../dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {

    $request = json_decode($data, true);
   
    $id_calificacion = $request['id_calificacion'];
  

}


$sql = "DELETE FROM calificacion  WHERE id_calificacion ='$id_calificacion' ;";



if ($con->query($sql) === true) {

    $response = "Datos eliminados exitosamente";

} else {

    $response = "Error ";
}

echo json_encode($response);