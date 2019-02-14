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

 

  require "dbconnect.php";

    $data = file_get_contents("php://input");

    if (isset($data)) {

        $request = json_decode($data);
       
        $name = $request->name;
        $paginaWeb = $request->paginaWeb;
        $numero_contacto = $request->numero_contacto; 
        $image = $request->image;    
        $direccion = $request->direccion;   
        $horario = $request->horario;    
        $departamento = $request->departamento;     
        $municipio = $request->municipio;          

      
        

    }
    
    $name = stripslashes(utf8_decode($name));
    $paginaWeb = stripslashes($paginaWeb);
    $numero_contacto = stripslashes($numero_contacto);
    $direccion = stripslashes(utf8_decode($direccion));
    $horario = stripslashes(utf8_decode($horario));
    $departamento = stripslashes(utf8_decode($departamento));

    // check if empresa is already existed with the same name   
    $sql = "SELECT nombre_emp, link_emp FROM empresa WHERE nombre_emp LIKE '$name' AND link_emp LIKE '$paginaWeb'";   

    if ($result=mysqli_query($con, $sql))
    { 
        if ($row = $result->fetch_assoc()) {  
            
            $response = "La Empresa ya está registrado!!";         
            echo json_encode($response);       
        }  

        else { 
            file_put_contents('uploads/imagen-logo-empresa/img_'.date('Y-m-d-H-s').'.jpg', base64_decode(explode(',',$image)[1]));
            $image = ('uploads/imagen-logo-empresa/img_'.date('Y-m-d-H-s').'.jpg');
 
            $sql = "INSERT INTO empresa (nombre_emp, direccion_emp, horario_emp, logo_emp, link_emp, telefono_emp) VALUES (' $name','$direccion, $municipio, $departamento', '$horario',  '$image', '$paginaWeb', '$numero_contacto')";
            //$sql = "INSERT INTO sucursal (direccion_suc) VALUES ('".$value['direction']."')";, 

            if ($con->query($sql) === TRUE) {
                $response= "registro exitoso";
            } else 
            {
                $response= "Error: " . $sql . "<br>" . $db->error;
            }
        
            echo json_encode( $response);
        }

    } else 
    {
        $response = "El servidor no funciona correctamente!!!!";       
        echo json_encode($response);  
    }
         
    

?>

 