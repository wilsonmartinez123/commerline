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

require "../dbconnect.php";

$query = "SELECT * FROM calificacion c left join usuarios u on c.id_usuario = u.id_usuario";
$result = mysqli_query($con, $query);

$response = array();
while ($row = mysqli_fetch_array($result)) {

    $row = array_map('utf8_encode', $row);
    array_push($response, array('id_calificacion' => $row[0],

        'valor_cal' => $row[1],
        'id_pro' => $row[2],
        'id_usuario' => $row[3],
        'correo_usu' => $row['correo_usu'],

    ));

}

echo json_encode(array('calificacion' => $response));

mysqli_close($con);
