<?php

Header('Access-Control-Allow-Origin: *');
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

require "dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {

    $request = json_decode($data);
    $password = $request->password;
    $password = md5($password);
    $name = $request->name;

}

$name = stripslashes($name);
$password = stripslashes($password);

$sql = "UPDATE clientes SET clave_cli = '$password'  WHERE correo_cli ='$name';";

if ($con->query($sql) === true) {

    $response = "su clave se cambio con exito";

} else {

    $response = "Error: " . $sql . "<br>" . $con->error;
}

echo json_encode($response);
