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

 

  require "db.php";

    $data = file_get_contents("php://input");

    if (isset($data)) {

        $request = json_decode($data);
        $name = $request->name;
        $image_name = $request->image_name;
        $price = $request->price;  
        $description = $request->description;                                       
    }
    
    $name = stripslashes($name);
    $image_name = stripslashes($image_name);
    $price = stripslashes($price);
    $description = stripslashes($description);

    //elimina la imagen en el servidor
    if(file_exists($image_name)){
    unlink($image_name);
    }
    else{
    
    $sql = "DELETE FROM productos  WHERE name ='$name';";
    
    if ($con->query($sql) === TRUE) {
        
        $response= "datos eliminados exitosamente";
    
    } else {
        
        $response= "Error: " . $sql . "<br>" . $con->error;
    }
}
    echo json_encode( $response);
    
?>