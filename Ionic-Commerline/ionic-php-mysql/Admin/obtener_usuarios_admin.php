<?php
//header("Access-Control-Allow-Origin: *");

header('Content-Type: text/html; charset=utf-8');
header('Content-type: application/json');

try {

    $conn = mysqli_connect('localhost', 'root', '3809', 'crawler');

    if (!$conn) {

        echo "No se puede conectar a la base de datos";

    }

    $query = "SELECT * FROM clientes where id_rol = '2'";
    $result = mysqli_query($conn, $query);

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

        ));

    }

    echo json_encode(array('usuarios' => $response));

} catch (Exception $e) {
    echo "Erro: " . $e->getMessage();
};

mysqli_close($conn);

?>
