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

$json = file_get_contents("php://input");
$data = json_decode($json, true);

$array_data = $data["productos"];
//if(is_array($array_data) || is_object($array_data)){

if (is_array($array_data)) {

    foreach ($array_data as $value) {

        $image = $value["picture"];
        $namefile = $value["namefile"];
        //quitar la extension del nombre de la imagen.
        $namefile = pathinfo($namefile)['filename'];

        $name = utf8_decode($value["name"]);
        $description = utf8_decode($value["description"]);

        //file_put_contents('uploads/'.$namefile.'.jpg', base64_decode(explode(',',$image)[1]));
        //$images = ('uploads/'.$namefile.'.jpg');

        //seleccionar el ID de la categeria escogida
        $sqlte = "SELECT * FROM categorias WHERE nombre_categoria = '" . $value["categoria"] . "' ";
        $resultado = mysqli_query($con, $sqlte);
        $fila = mysqli_fetch_array($resultado);

        $IdCategoria = $fila['id_categoria'];

        //SELECCIONA ID empresa dependiendo del empresario que hace login
        $created = date('Y-m-d H:i:s');

        $sqls = "SELECT * FROM clientes INNER JOIN empresa  ON clientes.id_cliente = empresa.id_cliente WHERE clientes.id_cliente = '" . $value["IdEmpresario"] . "'";
        $result = mysqli_query($con, $sqls);
        $row = mysqli_fetch_array($result);

        $IDempresa = $row['id_empresa'];
        $empresario = $row['nombre_cli'];
        $identificacion = $row['identificacion_cli'];

        $filename = 'uploads/' . $empresario . '-' . $identificacion . '/';

        //si el campo diasOferta no esta vacio
        if (!empty($value["diasOferta"])) {

            $inicioOferta = $value["fechaInicioOferta"];
            $finOferta = $value["fechaFinOferta"];

            if (!file_exists($filename)) {
                mkdir('uploads/' . $empresario . '-' . $identificacion . '/', 0777, true);

                file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg', base64_decode(explode(',', $image)[1]));
                $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg');

                $sql = "INSERT INTO productos (id_empresa, nombre_pro, imagen_pro, precioNuevo_pro, descripcion_pro, fecha_registro_pro, id_categoria, precioAnterior_pro, diasOferta_pro, inicioOferta_pro, finOferta_pro ) VALUES ('$IDempresa','$name', '$images'    ,  '" . $value["price"] . "',  '$description', '$created',  '$IdCategoria' ,  '" . $value["precioOferta"] . "',  '" . $value["diasOferta"] . "', '$inicioOferta', '$finOferta')";
                $query = $con->query($sql);

            } else {

                file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg', base64_decode(explode(',', $image)[1]));
                $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg');

                $sql = "INSERT INTO productos (id_empresa, nombre_pro, imagen_pro, precioNuevo_pro, descripcion_pro, fecha_registro_pro, id_categoria , precioAnterior_pro, diasOferta_pro, inicioOferta_pro, finOferta_pro) VALUES ('$IDempresa','$name', '$images'    ,  '" . $value["price"] . "',  '$description', '$created',  '$IdCategoria',  '" . $value["precioOferta"] . "',  '" . $value["diasOferta"] . "', '$inicioOferta', '$finOferta')";
                $query = $con->query($sql);
            }

        } else {

            if (!file_exists($filename)) {
                mkdir('uploads/' . $empresario . '-' . $identificacion . '/', 0777, true);

                file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg', base64_decode(explode(',', $image)[1]));
                $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg');

                $sql = "INSERT INTO productos (id_empresa, nombre_pro, imagen_pro, precioNuevo_pro, descripcion_pro, fecha_registro_pro, id_categoria) VALUES ('$IDempresa','$name', '$images'    ,  '" . $value["price"] . "',  '$description', '$created',  '$IdCategoria')";
                $query = $con->query($sql);

            } else {

                file_put_contents('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg', base64_decode(explode(',', $image)[1]));
                $images = ('uploads/' . $empresario . '-' . $identificacion . '/' . $name . '-' . $namefile . '.jpg');

                $sql = "INSERT INTO productos (id_empresa, nombre_pro, imagen_pro, precioNuevo_pro, descripcion_pro, fecha_registro_pro, id_categoria) VALUES ('$IDempresa','$name', '$images'    ,  '" . $value["price"] . "',  '$description', '$created',  '$IdCategoria')";
                $query = $con->query($sql);
            }

        }
    }

}

if ($query === true) {
    $response = "registro exitoso";
} else {
    $response = "Error: " . $sql . "<br>" . $db->error;
}
echo json_encode($response);

$con->close();
