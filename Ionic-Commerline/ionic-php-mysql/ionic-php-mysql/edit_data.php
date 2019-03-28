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

    $request = json_decode($data);
    $name = $request->name;
    $description = $request->description;
    $newName = $request->newName;
    $image = $request->image;
    $newPrice = $request->newPrice;
    $newDescription = $request->newDescription;
    //$date = $request->date;
    $empresa = $request->empresa;

}

$name = stripslashes(utf8_decode($name));
$description = stripslashes(utf8_decode($description));
$newName = stripslashes(utf8_decode($newName));
$newDescription = stripslashes(utf8_decode($newDescription));
$image = stripslashes($image);
//$date = stripslashes($date);
$empresa = stripslashes($empresa);
$newPrice = stripslashes($newPrice);

//si el campo imagen no esta vacio
if (!empty($request->newImage)) {

    $newImage = $request->newImage;
    $namefile = $request->namefile;
    //quitar la extension del nombre de la imagen.
    $namefile = pathinfo($namefile)['filename'];

    //para editar la imagen de acuerdo a la carpteta con el nombre e identificacion del empresario
    $sqls = "SELECT * FROM clientes INNER JOIN empresa  ON clientes.id_cliente = empresa.id_cliente WHERE empresa.id_empresa = '$empresa'";
    $result = mysqli_query($con, $sqls);
    $row = mysqli_fetch_array($result);

    $empresario = $row['nombre_cli'];
    $identificacion = $row['identificacion_cli'];

    if (file_exists($image)) {

        //reeemplaza la imagen anterior con la nueva en el servidor

        //rename($image, file_put_contents('uploads/' . $namefile . '.jpg', base64_decode(explode(',', $newImage)[1])));
        //$images = ('uploads/' . $namefile . '.jpg');
        rename($image, file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg', base64_decode(explode(',', $newImage)[1])));
        $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg');

    } else {
        //file_put_contents('uploads/' . $namefile . '.jpg', base64_decode(explode(',', $newImage)[1]));
        //$images = ('uploads/' . $namefile . '.jpg');
        file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg', base64_decode(explode(',', $newImage)[1]));
        $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg');
    }

    $sql = "UPDATE productos SET nombre_pro = '$newName', precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription', imagen_pro ='$images'  WHERE nombre_pro ='$name' AND descripcion_pro = '$description';";

    if ($con->query($sql) === true) {

        $response = "actualización de datos exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

} else {

    $sql = "UPDATE productos SET nombre_pro = '$newName', precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription' , imagen_pro ='$image'  WHERE nombre_pro ='$name' AND descripcion_pro = '$description';";

    if ($con->query($sql) === true) {

        $response = "actualización de datos exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);
}

//$con->close();
