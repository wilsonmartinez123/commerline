<?php
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

Header ('Access-Control-Allow-Origin *');
Header ('Access-Control-Allow-Headers origin, x-requested-with, content-type');


//include "manage-data.php";
// Define database connection parameters
$hn      = 'localhost';
$un      = 'root';
$pwd     = '3809';
$db      = 'commerline';
$cs      = 'utf8';

// Set up the PDO parameters
$dsn 	= "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
$opt 	= array(
                     PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
                     PDO::ATTR_EMULATE_PREPARES   => false,
                    );
// Create a PDO instance (connect to the database)
$pdo 	= new PDO($dsn, $un, $pwd, $opt);


//require "manage-data.php";
   // Retrieve and decode the posted JSON data
   $posted        = file_get_contents("php://input");

   
   $obje           =  json_decode($posted);


   // Separate out the supplied keys/values
   $fileName      =  strip_tags($obje->nombre);
   $fileData      =  strip_tags($obje->file);

   /*$name      =  strip_tags($obj->name);
   $price      =  strip_tags($obj->price);
   $description      =  strip_tags($obj->description);*/
 
  

   // Format the supplied base64 data URI so that we remove the initial base64 identifier
   $uri           =  substr($fileData,strpos($fileData,",")+1);


   // Replace any spaces in the formatted base64 URI string with pluses to avoid corrupted file data
   $encodedData   = str_replace(' ','+',$uri);


   // Decode the formatted base64 URI string
   $decodedData   = base64_decode($encodedData);

     // Write the base64 URI data to a file in a sub-directory named uploads
   $imagePath = file_put_contents('uploads/' . $fileName, $decodedData);
   $getImage = ('uploads/' .$fileName);

  

     try {
     /* $sql = "INSERT INTO productos( image_name) VALUES(:image)";
       
  

       $stmt 	= $pdo->prepare($sql);

      
      // $stmt->bindParam(':name', $name, PDO::PARAM_STR);
      $stmt->bindParam(':image', $getImage, PDO::PARAM_STR);
       
       //$stmt->bindParam(':price', $price, PDO::PARAM_STR);
       //$stmt->bindParam(':description', $description, PDO::PARAM_STR);
     
     
     

     $stmt->execute();   */

    
      if(!$imagePath)
      {
         // Uh-oh! Something went wrong - inform the user
         echo json_encode(array('message' => 'Error! The supplied data was NOT written '));
      }

      // Everything went well - inform the user :)
      echo json_encode(array('message' => 'The file was successfully uploaded'));
 

   }
   catch(Exception $e)
   {
      // Uh-oh! Something went wrong - inform the user
      echo json_encode(array('message' => 'Fail!'));
   }

 /*  
   try {
    $sql = "INSERT INTO productos(name, image_name, price, description) VALUES(:name, :image, :price, :description)";
     


     $stmt 	= $pdo->prepare($sql);

    

     $stmt->bindParam(':name', $name, PDO::PARAM_STR);
     $stmt->bindParam(':image', $getImage, PDO::PARAM_STR);
     $stmt->bindParam(':price', $price, PDO::PARAM_STR);
     $stmt->bindParam(':description', $description, PDO::PARAM_STR);

     $stmt->execute();
     echo json_encode(array('message' => 'Congratulations the record ' . $name . ' was added to the database'));
  }
  // Catch any errors in running the prepared statement
  catch(PDOException $e)
  {
     echo $e->getMessage();
  }

  */

      
      


   
?>