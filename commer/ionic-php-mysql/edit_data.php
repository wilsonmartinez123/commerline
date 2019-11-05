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
    $newName = $request->newName;
    $image = $request->image;
    $newPrice = $request->newPrice;
    $newDescription = $request->newDescription;
    $categoria = $request->categoria;
    $subcategoria = $request->subcategoria;
    $idProducto = $request->id;

}

$newName = stripslashes(utf8_decode($newName));
//remueve caracteres especiales
$newName = preg_replace('/[^A-Za-z0-9\-\,\.\(\) ]/', '', $newName); 

$newDescription = stripslashes(utf8_decode($newDescription));
$image = stripslashes($image);
$newPrice = stripslashes($newPrice);
$categoria = utf8_decode($categoria);
$subcategoria = utf8_decode($subcategoria);

//seleccionar id de categoria e id de subcategoria
$query = "SELECT * FROM categorias c INNER JOIN subcategorias s ON c.id_categoria = s.id_categoria WHERE nombre_categoria= '$categoria' AND nombre_subcategoria = '$subcategoria'";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_array($result);
$id_categoria = $row['id_categoria'];
$id_subcategoria = $row['id_subcategoria'];

//funcion para redimensionar imagenes
function save_image_from_64($path, $nombre, $dimension, $original)
{
    list($width, $height) = explode('x', $dimension); //Getting new height and width
    $img = str_replace('data:image/jpeg;base64,', '', $original); //Getting the base64 imagen
    $image = imagecreatefromstring(base64_decode($img));
    $new_image = imagecreatetruecolor($width, $height);
    imagecopyresampled($new_image, $image, 0, 0, 0, 0, $width, $height, imagesx($image), imagesy($image));
    imagejpeg($new_image, $path . $nombre . '.jpg', 100); // guardar la imagen
    imagedestroy($image); //liberar memoria
}

//si el campo imagen no esta vacio

if (!empty($request->newImage)) {

    $newImage = $request->newImage;
    $namefile = $request->namefile;
    $empresa = $request->empresa;

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

    $sql = "UPDATE productos SET nombre_pro = '$newName', precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription', imagen_pro ='$images', id_categoria ='$id_categoria', id_subcategoria ='$id_subcategoria'  WHERE id_pro ='$idProducto';";

    if ($con->query($sql) === true) {

        $response = "actualización de datos exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

}

//si actualiza el nombre del producto, ctualiza tambien el nombre de la imagen del producto
else {

    $filename = substr($image, strrpos($image, '-'));

    $str = explode("/", $image);
    $empresario = $str[count($str) - 2];
    $replace = ('uploads/' . $empresario . '/' . $newName . $filename);

    rename($image, $replace);
    $images = ('uploads/' . $empresario . '/' . $newName . $filename);

    $sql = "UPDATE productos SET nombre_pro = '$newName', precioNuevo_pro ='$newPrice', descripcion_pro ='$newDescription', imagen_pro ='$images', id_categoria ='$id_categoria', id_subcategoria ='$id_subcategoria' WHERE id_pro ='$idProducto';";
    $query = $con->query($sql);

    if ($query === true) {

        $response = "actualización de datos exitosa";

    } else {

        $response = "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode($response);

}

//$con->close();
