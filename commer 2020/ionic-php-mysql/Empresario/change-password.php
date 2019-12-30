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
    $request = json_decode($data, true);
    $password = $request['password'];
    $password = md5($password);
//obtiene el id del cliente
    //$cliente = $request->cliente;
    $rol = $request['rol'];
    $currentPassword = $request['currentPassword'];
    $currentPassword = md5($currentPassword);
}

//if(!empty($request->rol)){

//  $rol = $request->rol;

if ($rol == "1") {

    $admin = $request->admin;

    $sql = "SELECT clave_admin from administrador WHERE clave_admin like '$currentPassword'";

    $result = mysqli_query($con, $sql);

    if ($result) {

        if (empty($result->fetch_assoc())) {

            $response = "La contraseña actual es incorrecta!!";
            echo json_encode($response);

        } else {

            $admin = $request->admin;

            $sql = "UPDATE administrador SET clave_admin = '$password'  WHERE id_administrador ='$admin';";

            if ($con->query($sql) === true) {

                $response = "Su clave se cambio con exito";

            } else {

                $response = "Error: " . $sql . "<br>" . $con->error;
            }

            echo json_encode($response);
        }
    }

} else if ($rol == "2") {

    $cliente = $request->cliente;

    $sql = "SELECT clave_cli from clientes WHERE clave_cli like '$currentPassword'";

    $result = mysqli_query($con, $sql);

    if ($result) {

        if (empty($result->fetch_assoc())) {

            $response = "La contraseña actual es incorrecta!!";
            echo json_encode($response);

        } else {

            $sql = "UPDATE clientes SET clave_cli = '$password'  WHERE id_cliente ='$cliente';";

            if ($con->query($sql) === true) {

                $response = "Su clave se cambio con exito";

            } else {

                $response = "Error: " . $sql . "<br>" . $con->error;
            }

            echo json_encode($response);
        }
    }

} else {

    $usuario = $request->usuario;

    $sql = "SELECT clave_usu from usuarios WHERE clave_usu like '$currentPassword'";

    $result = mysqli_query($con, $sql);

    if ($result) {

        if (empty($result->fetch_assoc())) {

            $response = "La contraseña actual es incorrecta!!";
            echo json_encode($response);

        } else {

            $sql = "UPDATE usuarios SET clave_usu = '$password'  WHERE id_usuario ='$usuario';";

            if ($con->query($sql) === true) {

                $response = "Su clave se cambio con exito";

            } else {

                $response = "Error: " . $sql . "<br>" . $con->error;
            }

            echo json_encode($response);
        }
    }
}
