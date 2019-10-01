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

require "dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {

    $request = json_decode($data, true);

    $array_data = $request;

    if (is_array($array_data)) {

        foreach ($array_data as $value) {

            $nombre = utf8_decode($value["nombre_pro"]);
            //$id_producto = $value["id"];
            $imagenNombre = utf8_decode($value["imagen_pro"]);

            $sql = "DELETE FROM productos  WHERE nombre_pro ='$nombre' AND imagen_pro = '$imagenNombre' ;";
            //$sql = "DELETE FROM productos  WHERE id_pro ='$id_producto' ;";
            $query = $con->query($sql);

            //elimina la imagen en el servidor
            if (file_exists($imagenNombre)) {

                unlink($imagenNombre);
            }

        }

        if ($query === true) {

            $response = "datos eliminados exitosamente";

        } else {

            // $response= "Error: " . $sql . "<br>" . $con->error;
            $response = "Error ";
        }

        echo json_encode($response);

    }
}
