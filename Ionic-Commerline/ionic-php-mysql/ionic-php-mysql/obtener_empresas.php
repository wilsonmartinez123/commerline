<?php

Header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
header('Content-Type: text/html; charset=utf-8');
header('Content-type: application/json');

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

$query = "SELECT * FROM empresa ";
$result = mysqli_query($con, $query);

$response = array();
while ($row = mysqli_fetch_array($result)) {

    $row = array_map('utf8_encode', $row);
    array_push($response, array('id_empresa' => $row[0],

        'id_cliente' => $row[1],
        'nombre_emp' => $row[2],
        'direccion_emp' => $row[3],
        'horario_emp' => $row[4],
        'logo_emp' => $row[5],
        'telefono_emp' => $row[6],
        'link_emp' => $row[7],

    ));

}

echo json_encode(array('empresa' => $response));

mysqli_close($con);

?>
