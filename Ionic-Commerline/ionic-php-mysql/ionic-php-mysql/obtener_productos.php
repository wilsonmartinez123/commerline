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

$query = "SELECT * FROM productos p left join categorias c on p.id_categoria = c.id_categoria ";
$result = mysqli_query($con, $query);

$response = array();
while ($row = mysqli_fetch_array($result)) {

    $row = array_map('utf8_encode', $row);
    array_push($response, array('id' => $row[0],

        'id_empresa' => $row[1],
        'nombre_pro' => $row[3],
        'desripcion_pro' => $row[4],
        'imagen_pro' => $row[5],
        'precioAnterior_pro' => $row[6],
        'precioNuevo_pro' => $row[7],
        'diasOferta_pro' => $row[8],
        'inicioOferta_pro' => $row[9],
        'finOferta_pro' => $row[10],
        'fecha_registro_pro' => $row[11],
        'nombre_categoria' => $row['nombre_categoria'],

    ));

}

echo json_encode(array('productos' => $response));

mysqli_close($con);
