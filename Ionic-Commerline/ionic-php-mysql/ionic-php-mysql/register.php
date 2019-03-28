<?php
Header('Access-Control-Allow-Origin *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day

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
    $username = $request->username;
    $password = $request->password;
    $password = md5($password);
    $mobile = $request->mobile;
    $emailadd = $request->email;
    $identificacion = $request->identificacion;
    $matricula = $request->matricula;

}
$username = stripslashes($username);
$password = stripslashes($password);
$mobile = stripslashes($mobile);
$emailadd = stripslashes($emailadd);
$identificacion = stripslashes($identificacion);
$matricula = stripslashes($matricula);

$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);
$mobile = mysql_real_escape_string($mobile);
$emailadd = mysql_real_escape_string($emailadd);
$identificacion = mysql_real_escape_string($identificacion);
$matricula = mysql_real_escape_string($matricula);

// check if user is already existed with the same email
$sql = "SELECT correo_cli from clientes WHERE correo_cli like '$emailadd'";

if ($result = mysqli_query($con, $sql)) {

    if ($row = $result->fetch_assoc()) {

        //$response["error"] = TRUE;
        $response = "El correo ya esta registrado!!";
        echo json_encode($response);
    } else {

        $sql = "INSERT INTO clientes (id_rol, nombre_cli, clave_cli, telefono_cli, correo_cli, identificacion_cli, matricula_mercantil_cli)
        VALUES (2,'$username', '$password', '$mobile', '$emailadd', '$identificacion', '$matricula')";

        if ($con->query($sql) === true) {

            $response = "Registro exitoso";

        } else {

            $response = "Error: " . $sql . "<br>" . $db->error;
        }

        echo json_encode($response);
    }

} else {

    $response = "El servidor no funciona correctamente!!!!";
    echo json_encode($response);
}

?>