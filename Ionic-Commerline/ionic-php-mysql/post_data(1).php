<?php

    Header ('Access-Control-Allow-Origin *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
    header('Content-Type: text/html; charset=utf-8');

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
    }

 

  //require "db.php";
  require "dbconnect.php";
  
  $json = file_get_contents("php://input");
  $data = json_decode($json, true);
  
  $array_data = $data["productos"];
  //if(is_array($array_data) || is_object($array_data)){
      
    if(is_array($array_data)){
        
        foreach ($array_data as $value){

            $image = $value["picture"];

            $name = utf8_decode($value["name"]);
            $description = utf8_decode($value["description"]);
        
            
           
            file_put_contents('uploads/img_'.date('Y-m-d-H-s').'.jpg', base64_decode(explode(',',$image)[1]));
            $images = ('uploads/img_'.date('Y-m-d-H-s').'.jpg');
            
      

            $created=date('Y-m-d H:i:s');
            

            $sqls = "SELECT * FROM clientes INNER JOIN empresa  ON clientes.id_cliente = empresa.id_cliente WHERE clientes.id_cliente = '".$value["IdEmpresario"]."'";
            $result = mysqli_query($con, $sqls);
            $row = mysqli_fetch_array($result);

            $IDempresa = $row['id_empresa'];
            
            $sql = "INSERT INTO productos (id_empresa, nombre_pro, imagen_pro, precioNuevo_pro, descripcion_pro, fecha_registro_pro, categoria_pro) VALUES ('$IDempresa','$name', '$images'    ,  '".$value["price"]."',  '$description', '$created',  '".$value["categoria"]."')";
            $query = $con->query($sql);
        }
    }
    
    if ($query === TRUE) {
        $response= "registro exitoso";
    } else
    {
        $response= "Error: " . $sql . "<br>" . $db->error;
    }
    echo json_encode($response);
    
             


    $con->close();
       

 
         
?>
        
         
 