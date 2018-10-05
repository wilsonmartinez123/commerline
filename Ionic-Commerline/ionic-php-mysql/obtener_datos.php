<?php
//header("Access-Control-Allow-Origin: *");

header('Content-Type: text/html; charset=utf-8');
header('Content-type: application/json');


try {

    $conn = mysqli_connect('localhost', 'root', '3809', 'crawler');


    if(!$conn){

        echo "No se puede conectar a la base de datos";

    }	


    $query = "SELECT * FROM productosscraping ";
    $result = mysqli_query($conn,$query);



    $response = array();
    While($row= mysqli_fetch_array($result))

    {

        $row = array_map('utf8_encode', $row);
        array_push($response,array('id'=>$row[0], 

        'nombre'=>$row[3],
        'desripcion'=>$row[1],
        'imagen'=>$row[2],
        'precio'=>$row[4],
        'categoria'=>$row[5],
        'id_empresa'=>$row[6]

    ));

}


echo json_encode(array('productos'=>$response));



} catch (Exception $e) {
    echo "Erro: ". $e->getMessage();
};

mysqli_close($conn);
?>


