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
        $price = $request->price;
        $description = $request->description; 
        $image = $request->image;               
       // $image     =  strip_tags($request->image);

        

    }
   // file_put_contents('uploads/img_'.date('Y-m-d-H-s').'.jpg', base64_decode(explode(',',$image)[1]));
    
    $name = stripslashes($name);
    $image = stripslashes($image);
    $price = stripslashes($price);
    $description = stripslashes($description);

    
    
    file_put_contents('uploads/img_'.date('Y-m-d-H-s').'.jpg', base64_decode(explode(',',$image)[1]));
    $image = ('uploads/img_'.date('Y-m-d-H-s').'.jpg');
   
    //especifica la fecha en que se registra el producto
    $created=date('Y-m-d H:i:s');
 

/////// Check to see that the database does not contain repeated information

/*$sql = "SELECT name from productos WHERE name like '$name'";   

    if ($result=mysqli_query($con, $sql))
    { 

        if ($row = $result->fetch_assoc()) {  
            
            //$response["error"] = TRUE;           
            $response = "Name of product already exists in our database";         
            echo json_encode($response);       
        }  

        else { */

      $sql = "SELECT id FROM productos WHERE name = '$name'";

      $result = mysqli_query($con,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      $count = mysqli_num_rows($result);

      // If result matched country and $country, table row must be 1 row                   

        if($count >0) {

        $response=  "Name of product already exists in our database"; 

        /*}else {
            
            $sql = "SELECT id FROM countries WHERE  capital = '$capital'";

        $result = mysqli_query($db,$sql);

        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

        $active = $row[‘active’];

        $count = mysqli_num_rows($result);

        // If result matched capital and $capital, table row must be 1 row           

        if($count >0) {

        $response= “capital already exists, there are no two countries with the same capital”;
       */

        }        
               

        else
        {
             
            $sql = "INSERT INTO productos (name, image_name, price, description, fecha_pro) VALUES ('$name', '$image',  '$price', '$description', '$created')";
            
            if ($con->query($sql) === TRUE) {
                $response= "registro exitoso";
            } else 
            {
                $response= "Error: " . $sql . "<br>" . $db->error;
            }
        }
        echo json_encode( $response);
         
       // $db->close();

   /* } else {
        $response = "El servidor no funciona correctamente!!!!";       
        echo json_encode($response);  
    }*/

?>

 