<?php



  define('HOST','localhost');
  define('USER','root');
  define('PASS','3809');
  define('DB','commerline');
  $con = mysqli_connect(HOST,USER,PASS,DB);
  //$con->set_charset('utf8_decode');
  
  if (!$con){
	 die("Error in connection" . mysqli_connect_error()) ;
  } 



?>