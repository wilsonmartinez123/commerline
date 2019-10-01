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

//$query = "SELECT * FROM categorias ";
/*$query = "SELECT DISTINCT c.nombre_categoria  FROM categorias c INNER JOIN productos p ON c.id_categoria = p.id_categoria
INNER JOIN subcategorias s ON c.id_categoria = s.id_categoria"; */

$query = "SELECT DISTINCT c.id_categoria, c.nombre_categoria  FROM categorias c INNER JOIN productos p ON c.id_categoria = p.id_categoria INNER JOIN subcategorias s ON c.id_categoria = s.id_categoria ORDER BY nombre_categoria ASC ";
$result = mysqli_query($con, $query);

$response = array();

while ($row = mysqli_fetch_array($result)) {

    $row = array_map('utf8_encode', $row);

    $temp = array(
        "categoria" => $row["nombre_categoria"],
    );

    $id = $row['id_categoria'];

    $query2 = "SELECT * FROM subcategorias WHERE id_categoria='$id'";
    $result2 = mysqli_query($con, $query2);

    while ($row2 = mysqli_fetch_array($result2)) {
        $row2 = array_map('utf8_encode', $row2);
        $temp["subcategoria"][] = array(
            "subcategoria" => $row2["nombre_subcategoria"],
        );
    }
    $response[] = $temp;
}

echo json_encode(array('categorias' => $response));

mysqli_close($con);
