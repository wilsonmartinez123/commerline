<?php


Header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400'); // cache for 1 day

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    exit(0);
}

require 'dbconnect.php';
/*
CREATE EVENT myevent
    ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
    DO
      UPDATE myschema.mytable SET mycol = mycol + 1;


      CREATE EVENT IF NOT EXISTS 'Clean_Older_Than_90_days_logs'
ON SCHEDULE
  EVERY 1 DAY_HOUR
  COMMENT 'Clean up log connections at 1 AM.'
  DO
    DELETE FROM productos
    WHERE log_date < DATE_SUB(NOW(), INTERVAL 90 DAY)
*/
DELIMITER $$
    CREATE EVENT DeleteProducts
ON SCHEDULE EVERY 1 MINUTE
DO
DELETE FROM 'productos' WHERE 'finOferta_pro' < CURRENT_TIMESTAMP();

      