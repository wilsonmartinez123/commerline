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

//Libreria PHPMailer para enviar correo

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'Email-Verification/Exception.php';
require 'Email-Verification/PHPMailer.php';
require 'Email-Verification/SMTP.php';

require "dbconnect.php";

$data = file_get_contents("php://input");
if (isset($data)) {
    $request = json_decode($data);
    $option = $request->option;
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

//enviar codigo de activacion al email.
$codigo_activacion = md5(rand());

function enviar_mensaje($con, $username, $password, $mobile, $emailadd, $identificacion, $matricula, $codigo_activacion, $tipo_usuario)
{

// Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";

    try {
//Server settings
        $mail->SMTPDebug = 0; // Enable verbose debug output
        $mail->isSMTP(); // Send using SMTP

        //$mail->Helo = "smtp.gmail.com"; //Muy importante para que llegue a hotmail y otros
        $mail->Host = "smtp.live.com"; // Set the SMTP server to send through
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'commer.colombia@hotmail.com'; // SMTP username
        $mail->Password = 'commer123'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->Port = 587; // TCP port to connect to

//Recipients
        $mail->setFrom('commer.colombia@hotmail.com', 'Commer');
        $mail->addAddress($emailadd); // Add a recipient
        //$mail->addAddress('ellen@example.com');               // Name is optional
        //$mail->addReplyTo('info@example.com', 'Information');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

// Attachments

//$mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name

        $base_url = "http://localhost/ionic-php-mysql/";

        $mail->isHTML(true); // Set email format to HTML
        $mail->Subject = 'Verificación de correo Commer';
        $mail->Body = '<p>Hola ' . $username . ' <br/> <br/> ¡Por favor! ingrese al link para verificar su cuenta de correo y poder ingresar al aplicativo, ¡gracias! . <br/> <br/> <a href="' . $base_url . 'verificacion_email.php?activation_code=' . $codigo_activacion . '">' . $base_url . 'verificacion_email.php?activation_code=' . $codigo_activacion . '</a>';
        $mail->send();
        //echo 'El mensaje se ha enviado';

        if ($tipo_usuario == '2') {

            $sql = "INSERT INTO clientes (id_rol, nombre_cli, clave_cli, telefono_cli, correo_cli, identificacion_cli, matricula_mercantil_cli, estado_correo_cli, codigo_activacion_cli)
        VALUES (2,'$username', '$password', '$mobile', '$emailadd', '$identificacion', '$matricula','false','$codigo_activacion')";

            if ($con->query($sql) === true) {

                $response = 'El mensaje se ha enviado';

            } else {

                $response = "Error: " . $sql . "<br>" . $db->error;

            }

            echo json_encode($response);

        } else {

            $sql = "INSERT INTO usuarios (id_rol, nombre_usu, clave_usu, telefono_usu, correo_usu, estado_correo_usu, codigo_activacion_usu)
        VALUES (3, '$username', '$password', '$mobile', '$emailadd','false','$codigo_activacion')";

            if ($con->query($sql) === true) {

                $response = 'El mensaje se ha enviado';

            } else {

                $response = "Error: " . $sql . "<br>" . $db->error;
            }

            echo json_encode($response);

        }

    } catch (Exception $e) {
        //echo "El mensaje no se pudo enviar: {$mail->ErrorInfo}";
        $response = "El mensaje no se pudo enviar: {$mail->ErrorInfo}";
        echo json_encode($response);

    }

}

if ($option == '2') {

    //verifica que el correo que esta registrando no aparezca tanto como empresario o usuario
    $sql = "SELECT correo_cli from clientes WHERE correo_cli like '$emailadd'";
    $sql2 = "SELECT correo_usu from usuarios WHERE correo_usu like '$emailadd'";

    $result = mysqli_query($con, $sql);
    $result2 = mysqli_query($con, $sql2);

    if ($result or $result2) {

        if ($result->fetch_assoc() or $result2->fetch_assoc()) {

            $response = "El correo ya esta registrado!!";
            echo json_encode($response);

        } else {

            // enviar email
            enviar_mensaje($con, $username, $password, $mobile, $emailadd, $identificacion, $matricula, $codigo_activacion, 2);

        }
    }

} else {

    // check if user is already existed with the same email
    $sql = "SELECT correo_usu from usuarios WHERE correo_usu like '$emailadd'";
    $sql2 = "SELECT correo_cli from clientes WHERE correo_cli like '$emailadd'";

    $result = mysqli_query($con, $sql);
    $result2 = mysqli_query($con, $sql2);

    if ($result or $result2) {

        if ($result->fetch_assoc() or $result2->fetch_assoc()) {

            $response = "El correo ya esta registrado !!";
            echo json_encode($response);

        } else {

// enviar email

            enviar_mensaje($con, $username, $password, $mobile, $emailadd, $identificacion, $matricula, $codigo_activacion, 3);

        }

    } else {

        $response = "El servidor no funciona correctamente!!!!";
        echo json_encode($response);
    }

}
