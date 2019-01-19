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
   
 
 require 'dbconnect.php';

$data = file_get_contents("php://input");
if(isset($data)){

    $request = json_decode($data);
    $correo = $request->correo;
    $password = $request->password;
}
$correo = stripslashes($correo);
$password = stripslashes($password);
$correo = mysql_real_escape_string($correo);
$password = mysql_real_escape_string($password);

$password = md5($password);


    $sql = "SELECT id_usuario FROM usuarios WHERE correo_usu = '$correo' and clave_usu = '$password' ";
   
    $result = mysqli_query($con, $sql);
    $row = mysqli_fetch_array($result);

    $response = $row[0];

    echo json_encode($response);

   /* if ($con->query($sql) === TRUE) {
        $response= "registro exitoso";
    } else 
    {
        $response= "Error: " . $sql . "<br>" . $db->error;
    }
    echo json_encode($response); */
?>