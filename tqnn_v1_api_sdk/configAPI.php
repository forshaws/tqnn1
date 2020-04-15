<?php

/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: examples/configAPI.php
description: Thin client script that communicates with the Toridion authID API


*/
if(file_exists("api-config.php")){
include("api-config.php");
}
else{
$apipath="https://api.toridion.com";
$tqnnAPIKEY="123456789";
$tqnnAPISECRET="123456789";
//$user_request_id="demo";
}


date_default_timezone_set('GMT');
$datestamp=date('Y-m-d H:i:s');

?>
