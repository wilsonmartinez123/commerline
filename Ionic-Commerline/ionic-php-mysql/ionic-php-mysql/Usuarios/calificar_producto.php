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

require "../dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {

    $request = json_decode($data);

    $idPro = $request->idPro;
    $value = $request->value;
    $usuario = $request->usuario;

}

$idPro = stripslashes($idPro);
$value = stripslashes($value);
$usuario = stripslashes($usuario);

//seleccionar el ID de producto
$sql = "SELECT * FROM usuarios WHERE correo_usu LIKE '$usuario' ";
$resultado = mysqli_query($con, $sql);
$fila = mysqli_fetch_array($resultado);

$Idusuario = $fila['id_usuario'];

////////////////////

$sqli = "SELECT id_pro, id_usuario FROM calificacion WHERE id_pro LIKE '$idPro' AND id_usuario LIKE '$Idusuario' ";

if ($result = mysqli_query($con, $sqli)) {
    if ($row = $result->fetch_assoc()) {

        $response = "Ya calificaste este producto, si desea modificar, selecciona Editar, Gracias!!";
        echo json_encode($response);
    } else {

        $mysql = "INSERT INTO calificacion (valor_cal, id_pro, id_usuario) VALUES ('$value',' $idPro','$Idusuario' )";

        if ($con->query($mysql) === true) {

            $response = "Valor registrado, Gracias";

        } else {

            $response = "Error: ";
            //$response = "Error: " . $sql . "<br>" . $db->error;
        }

        echo json_encode($response);
    }
}
