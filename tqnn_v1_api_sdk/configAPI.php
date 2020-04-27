<?php

/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: examples/configAPI.php
description: Default configuration file that is used if the setup wizard has not been run to generate customer specific APIKEY and APISECRET


*/
if(file_exists("api-config.php")){
include("api-config.php");
}
else{
$apipath="https://api.toridion.com";
$tqnnAPIKEY="IBM__TNNS123456789";
$tqnnAPISECRET="123456789";
}


date_default_timezone_set('GMT');
$datestamp=date('Y-m-d H:i:s');

?>
