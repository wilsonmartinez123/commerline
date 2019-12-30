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

    $request = json_decode($data, true);
    $admin = $request['admin'];

    $newName = $request['newName'];
    $newEmail = $request['newEmail'];

}

$newName = utf8_decode($newName);
$newEmail = utf8_decode($newEmail);

$sql = "UPDATE administrador SET nombre_admin = '$newName', correo_admin ='$newEmail'  WHERE id_administrador ='$admin';";

if ($con->query($sql) === true) {

    $response = "Actualización de datos exitosa";

} else {

    $response = "Error: " . $sql . "<br>" . $con->error;
}

echo json_encode($response);

$con->close();
