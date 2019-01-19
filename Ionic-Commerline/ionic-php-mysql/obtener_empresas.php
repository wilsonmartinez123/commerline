<?php
//header("Access-Control-Allow-Origin: *");

header('Content-Type: text/html; charset=utf-8');
header('Content-type: application/json');


try {

    $conn = mysqli_connect('localhost', 'root', '3809', 'crawler');


    if(!$conn){

        echo "No se puede conectar a la base de datos";

    }	


    $query = "SELECT * FROM empresa ";
    $result = mysqli_query($conn,$query);



    $response = array();
    While($row= mysqli_fetch_array($result))

    {

        $row = array_map('utf8_encode', $row);
        array_push($response,array('id_empresa'=>$row[0], 

        'nombre_emp'=>$row[1],
        'direccion_emp'=>$row[2],
        'horario_emp'=>$row[3],
        'logo_emp'=>$row[4]

    ));

}


echo json_encode(array('empresa'=>$response));



} catch (Exception $e) {
    echo "Erro: ". $e->getMessage();
};

mysqli_close($conn);
?>


