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


$query = "SELECT * FROM clientes c LEFT JOIN empresa e ON c.id_cliente = e.id_cliente";

$result = mysqli_query($con, $query);

$response = array();
while ($row = mysqli_fetch_array($result)) {

   

        $row = array_map('utf8_encode', $row);
        array_push($response, array('id_cliente' => $row[0],

            'id_rol' => $row[1],
            'nombre_cli' => $row[2],
            'identificacion_cli' => $row[3],
            'matricula_mercantil_cli' => $row[4],
            'clave_cli' => $row[5],
            'correo_cli' => $row[6],
            'telefono_cli' => $row[7],
            'id_empresa' => $row['id_empresa'],

        ));

}


echo json_encode(array('clientes' => $response));

mysqli_close($con);
