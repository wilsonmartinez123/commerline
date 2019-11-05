<?php

session_start();

Header('Access-Control-Allow-Origin: *');
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

require 'dbconnect.php';

$data = file_get_contents("php://input");
if (isset($data)) {

    $request = json_decode($data);
    $correo = $request->correo;
    $password = $request->password;
}
$correo = stripslashes($correo);
$password = stripslashes($password);
$correo = mysql_real_escape_string($correo);
$password = mysql_real_escape_string($password);

$password = md5($password);

$sql = "SELECT * FROM clientes WHERE correo_cli = '$correo' and clave_cli = '$password'";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);


if ($row) {

    if($row['estado_correo_cli'] == 'true') {

    $response = "empresario";
    echo json_encode($response);

    } else{

    $response = "verifica correo";
    echo json_encode($response);

    }



} else {

    $sqls = "SELECT * FROM administrador WHERE correo_admin = '$correo' and clave_admin = '$password'";

    $result = mysqli_query($con, $sqls);
    $row = mysqli_fetch_array($result);

    if ($row) {

        //$response = $row[1];
        $response = "administrador";
        echo json_encode($response);

    } else {

        $sqls = "SELECT * FROM usuarios WHERE correo_usu = '$correo' and clave_usu = '$password'";

        $result = mysqli_query($con, $sqls);
        $row = mysqli_fetch_array($result);

        if ($row) {

            //$response = $row[1];
            $response = "usuario";

        } else {
            $response = "Error: ";
        }

        echo json_encode($response);

    }

    

}

//echo json_encode($response);

/*
if($correo == $row['correo_cli'] && $password == $row['clave_cli']){
$response = $row[1];
//session_start();
//session_set_cookie_params(3000, "/");
$_SESSION['id_cliente'] = $row['id_cliente'];
}

else{
session_close();

}
echo json_encode($response);
 */

/*if ($row[0] != '') {
$response = $row['id_rol'];
//session_start();
//$_SESSION['id_cliente']= '14';
//$_SESSION['id_cliente'] = $current_user_id;
// = $row['id_cliente'];
//header("location:registrar_empresa.php");
}

echo json_encode($response); */

/* if($row[0] != ''){

//admin
if($row[1] == 1){
$response=  $row[2];
//  echo json_encode($response);
}

else{
$response= $row[2];
// echo json_encode($response);
}

echo json_encode($response);

}else{
$response= "invalid";
echo json_encode($response);
}

 */

/* if ($con->query($sql) === TRUE) {
$response= "registro exitoso";
} else
{
$response= "Error: " . $sql . "<br>" . $db->error;
}
echo json_encode($response); */
