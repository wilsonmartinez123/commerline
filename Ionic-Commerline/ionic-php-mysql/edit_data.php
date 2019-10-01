<?php

Header('Access-Control-Allow-Origin *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: image/jpeg');

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
    $idProducto = $request->id;

    //Editar producto en oferta
    $newFechainicio = $request->newFechainicio;
    $newFechafin = $request->newFechafin;
    $newDiasoferta = $request->newDiasoferta;
    $newOfferprice = $request->newOfferprice;

}

$name = stripslashes(utf8_decode($name));
$description = stripslashes(utf8_decode($description));
$newName = stripslashes(utf8_decode($newName));
$newDescription = stripslashes(utf8_decode($newDescription));
$image = stripslashes($image);
//$date = stripslashes($date);
$empresa = stripslashes($empresa);
$newPrice = stripslashes($newPrice);

//funcion para redimensionar imagenes
function save_image_from_64($path, $name, $dimension, $original)
{
    list($width, $height) = explode('x', $dimension); //Getting new height and width
    $img = str_replace('data:image/jpeg;base64,', '', $original); //Getting the base64 imagen
    $image = imagecreatefromstring(base64_decode($img));
    $new_image = imagecreatetruecolor($width, $height);
    imagecopyresampled($new_image, $image, 0, 0, 0, 0, $width, $height, imagesx($image), imagesy($image));
    imagejpeg($new_image, $path . $name . '.jpg', 100); // guardar la imagen
    imagedestroy($image); //liberar memoria
}

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

        //rename($image, file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg', base64_decode(explode(',', $newImage)[1])));
        unlink($image);
        save_image_from_64('uploads/' . $empresario . '-' . $identificacion . '/', $newName . '-' . $namefile, "400x400", $newImage);
        $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg');

    } else {

        save_image_from_64('uploads/' . $empresario . '-' . $identificacion . '/', $newName . '-' . $namefile, "400x400", $newImage);
        $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $newName . '-' . $namefile . '.jpg');
    }

    $sql = "UPDATE productos SET nombre_pro = '$newName', precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription', imagen_pro ='$images', precioAnterior_pro  ='$newOfferprice', diasOferta_pro ='$newDiasoferta', inicioOferta_pro ='$newFechainicio', finOferta_pro ='$newFechafin'   WHERE id_pro ='$idProducto';";

    if ($con->query($sql) === true) {

        $response = "actualización de datos exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

} else {

    //si actualiza el nombre del producto, ctualiza tambien el nombre de la imagen del producto
    if (!empty($newName)) {

        $filename = substr($image, strrpos($image, '-'));

        $str = explode("/", $image);
        $empresario = $str[count($str) - 2];
        $replace = ('uploads/' . $empresario . '/' . $newName . $filename);

        rename($image, $replace);
        $images = ('uploads/' . $empresario . '/' . $newName . $filename);

        $sql = "UPDATE productos SET nombre_pro = '$newName', precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription', imagen_pro ='$images' , precioAnterior_pro  ='$newOfferprice', diasOferta_pro ='$newDiasoferta', inicioOferta_pro ='$newFechainicio', finOferta_pro ='$newFechafin' WHERE id_pro ='$idProducto';";
        $query = $con->query($sql);

    } else {

        $sql = "UPDATE productos SET precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription', precioAnterior_pro  ='$newOfferprice', diasOferta_pro ='$newDiasoferta', inicioOferta_pro ='$newFechainicio', finOferta_pro ='$newFechafin' WHERE id_pro ='$idProducto';";
        $query = $con->query($sql);
    }

    if ($query === true) {

        $response = "actualización de datos exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

}

//$con->close();
