<?php

Header ('Access-Control-Allow-Origin *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');    // cache for 1 day


// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

exit(0);
}

require "dbconnect.php";

//$email=$_POST['email'];
$data = file_get_contents("php://input");
if(isset($data)){

    $request = json_decode($data);
    $correo = $request->email;
}


$sql= ("SELECT * FROM usuarios WHERE correo_usu='$correo'");

$result = mysqli_query($con, $sql);
//$count=mysqli_num_rows($result);

$count = mysqli_num_rows($result);

if($count == 1){
    $r = mysqli_num_rows($result);

$password = $r['clave_usu'];
//$password = md5($password);
$email = $r['correo_usu'];
$name = $r['nombre_usu'];
//$subject="Login Info";
//$message="Tu contraseña es:" .$password;
//$message = 'your login name:". $to ." password: ". $password ."';
$content = "
<html>
  <head>
  </head>
  <body>
    <center><h2><b>Forgot Password Mail</b></h2></center><br><p>Dear ".$name.", <br>
    You Have received this mail because you have registered with us and you have clicked the forgot password option:-<br>
    Account Details with ABC :- <br>
    User Email:-  <b>".$email."</b><br>
    Password:- <b>".$password."</b><br>
    Use the above credentials for future use.<br>
    Team abc</p>";
        $content2 = "</body>
    </html>";
    $body = $content.$content2;
    $from ='forgotpassword@abc.com';
    $subject = "Forgot Password mail for ".$email."";
    $server=$_SERVER['HTTP_HOST'];
    $headers = "From: ABC<".$from. ">\r\nContent-type: text/html; charset=iso-8859-1\r\nMIME-Version: 1.0\r\n";

    $to = $email;
        $send_email = mail($to, $subject, $body, $headers);
        
if($send_email){

    $response = "mensaje enviado";
    echo json_encode($response);
}
else{
    
    $response = "Failed to Recover your password, try again";
    echo json_encode($response);
}

}else{

    $response = "El correo no esta registrado!!!!";       
    echo json_encode($response);  
}

?>