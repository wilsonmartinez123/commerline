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
        $newName = $request->newName;
        $image = $request->image; 
        $newPrice = $request->newPrice;  
        $newDescription = $request->newDescription;                 

    }

    //si el campo imagen no esta vacio
    if(!empty($request->newImage)){

    $newImage = $request->newImage; 

    //reeemplaza la imagen anterior con la nueva en el servidor
    rename($image, file_put_contents('uploads/img_'.date('Y-m-d-H-s').'.jpg', base64_decode(explode(',',$newImage)[1])));
    $images = ('uploads/img_'.date('Y-m-d-H-s').'.jpg');

    $sql = "UPDATE productos SET name = '$newName', price ='$newPrice', description ='$newDescription', image_name ='$images'  WHERE name ='$name';";

    if ($con->query($sql) === TRUE) {
        
        $response= "actualización de datos exitosa";
    
    } else {
        
        $response= "Error: " . $sql . "<br>" . $con->error;
    }

    echo json_encode( $response); 

   
    }else{ 
                    
        $sql = "UPDATE productos SET name = '$newName', price ='$newPrice', description ='$newDescription', image_name ='$image'  WHERE name ='$name';";


        if ($con->query($sql) === TRUE) {
            
            $response= "actualización de datos exitosa";
        
        } else {
            
            $response= "Error: " . $sql . "<br>" . $con->error;
        }
        

    
        echo json_encode( $response); 
    }
//$con->close();


?>

 