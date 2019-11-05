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

require "dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {

    $request = json_decode($data);
    $name = $request->nombre_pro;
    $id_producto = $request->id;
    $image_name = $request->imagen_pro;
    $price = $request->precioNuevo_pro;
    $description = $request->desripcion_pro;

}

//eliminar sin inconvenientes de tildes
$name = stripslashes(utf8_decode($name));
$image_name = stripslashes(utf8_decode($image_name));
$price = stripslashes($price);
$description = stripslashes($description);

//$sql = "DELETE FROM productos  WHERE nombre_pro ='$name' AND imagen_pro = '$image_name' ;";
$sql = "DELETE FROM productos  WHERE id_pro ='$id_producto' ;";

//elimina la imagen en el servidor
if (file_exists($image_name)) {

    unlink($image_name);
}

if ($con->query($sql) === true) {

    $response = "datos eliminados exitosamente";

} else {

// $response= "Error: " . $sql . "<br>" . $con->error;
    $response = "Error ";
}

echo json_encode($response);
