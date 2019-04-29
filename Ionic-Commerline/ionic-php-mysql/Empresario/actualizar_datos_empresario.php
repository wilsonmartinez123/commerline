<?php

Header('Access-Control-Allow-Origin *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
header('Content-Type: text/html; charset=utf-8');

// Access-Control headers are received during OPTIONS requests
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

    $request = json_decode($data);
    $cliente = $request->cliente;
   

    $newName = $request->newName;
    $newEmail = $request->newEmail;
    $newPhone = $request->newPhone;

}

$newName = stripslashes(utf8_decode($newName));
$newEmail = stripslashes(utf8_decode($newEmail));
$newPhone = stripslashes($newPhone);

$sql = "UPDATE clientes SET nombre_cli = '$newName', correo_cli ='$newEmail', telefono_cli ='$newPhone'  WHERE id_cliente ='$cliente';";

if ($con->query($sql) === true) {

    $response = "actualización de datos exitosa";

} else {

    $response = "Error: " . $sql . "<br>" . $con->error;
}

echo json_encode($response);

$con->close();
