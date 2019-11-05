<?php

require 'dbconnect.php';

$message = '';

if (isset($_GET['activation_code'])) {

    $codigo = $_GET['activation_code'];

    $sql = "SELECT * FROM usuarios WHERE codigo_activacion_usu = '$codigo'";

    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);

    if ($row > 0) {

        if ($row['estado_correo_usu'] == 'false') {
            $update_query = "UPDATE usuarios SET estado_correo_usu = 'true' WHERE codigo_activacion_usu = '" . $row['codigo_activacion_usu'] . "'";

            if ($con->query($update_query) === true) {

                $message = '<label class="text-success">Tu correo ha sido verificado exitosamente <br />Ahora puedes iniciar sesión: <a href="http://localhost:8100/#/login">Login</a></label>';
            }
        } else {
            $message = '<label class="text-info">Tu dirección de correo ya fue verificada, Gracias</label>';

        }

    } else {

        $sql = "SELECT * FROM clientes WHERE codigo_activacion_cli = '$codigo'";

        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($result);

        if ($row > 0) {

            if ($row['estado_correo_cli'] == 'false') {
                $update_query = "UPDATE clientes SET estado_correo_cli = 'true' WHERE codigo_activacion_cli = '" . $row['codigo_activacion_cli'] . "'";

                if ($con->query($update_query) === true) {

                    $message = '<label class="text-success">Tu correo ha sido verificado exitosamente <br />Ahora puedes iniciar sesión: <a href="http://localhost:8100/#/login">Login</a></label>';
                }
            } else {
                $message = '<label class="text-info">Tu dirección de correo ya fue verificada, Gracias</label>';

            }

        }

    }

} else {
    $message = '<label class="text-danger">Link invalido</label>';
}

?>
<!DOCTYPE html>
<html>
 <head>
 <meta charset="utf-8">
  <title>Verifica tu cuenta de correo</title>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

 </head>
 <body>

  <div class="container" >
   <h1 style='text-align:center'>Verificación de Email Commer</h1>

   <h3 style='text-align:center'><?php echo $message; ?></h3>

  </div>

 </body>

</html>
