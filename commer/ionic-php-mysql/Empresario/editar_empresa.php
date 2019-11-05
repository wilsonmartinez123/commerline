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

require "../dbconnect.php";

$data = file_get_contents("php://input");

if (isset($data)) {

    $request = json_decode($data);
    $empresa = $request->empresa;
    $logo = $request->logo;

    $newName = $request->newName;
    $newDirection = $request->newDirection;
    $newHorario = $request->newHorario;
    $newPhone = $request->newPhone;

}
$logo = stripslashes($logo);
$newName = stripslashes(utf8_decode($newName));
$newDirection = stripslashes(utf8_decode($newDirection));
$newHorario = stripslashes(utf8_decode($newHorario));
$newPhone = stripslashes($newPhone);

//si el campo imagen no esta vacio
if (!empty($request->newImage)) {

    $newImage = $request->newImage;

    $file = "../" . $logo;
    if (file_exists($file)) {

        //reeemplaza la imagen anterior con la nueva en el servidor

        rename($file, file_put_contents('../uploads/imagen-logo-empresa/img_' . date('Y-m-d-H-s') . '.jpg', base64_decode(explode(',', $newImage)[1])));
        $image = ('uploads/imagen-logo-empresa/img_' . date('Y-m-d-H-s') . '.jpg');

    } else {

        file_put_contents('../uploads/imagen-logo-empresa/img_' . date('Y-m-d-H-s') . '.jpg', base64_decode(explode(',', $newImage)[1]));
        $image = ('uploads/imagen-logo-empresa/img_' . date('Y-m-d-H-s') . '.jpg');
    }

    $sql = "UPDATE empresa SET nombre_emp = '$newName', direccion_emp ='$newDirection', horario_emp ='$newHorario', telefono_emp ='$newPhone', logo_emp = '$image'  WHERE id_empresa ='$empresa';";

    if ($con->query($sql) === true) {

        $response = "actualización de empresa exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

} else {

    $sql = "UPDATE empresa SET nombre_emp = '$newName', direccion_emp ='$newDirection', horario_emp ='$newHorario', telefono_emp ='$newPhone'  WHERE id_empresa ='$empresa';";

    if ($con->query($sql) === true) {

        $response = "actualización de empresa exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

}

$con->close();
