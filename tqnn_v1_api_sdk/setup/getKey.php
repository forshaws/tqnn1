<?php

/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename:setup/getKey.php
description: sends a request to generate a new clinet APIKEY and APISECRET to the Toridion master server.


*/

include("../configAPI.php");

$field = array(
	'tqnnAPIKEY' => urlencode($tqnnAPIKEY),
	'tqnnAPISECRET' => urlencode($tqnnAPISECRET),
	'user_request_id' => urlencode(isset($_POST['user_request_id'])?$_POST['user_request_id']:"notset"),
	'username' => urlencode(isset($_POST['username'])?$_POST['username']:""),
	'password' => urlencode(isset($_POST['password'])?$_POST['password']:""),
	'multihash' => urlencode(isset($_POST['multihash'])?$_POST['multihash']:""),
	'returnauthtoken' => urlencode(isset($_POST['returnauthtoken'])?$_POST['returnauthtoken']:""),
	'dataset' => urlencode(isset($_POST['dataset'])?$_POST['dataset']:""),
	'mode' => urlencode(isset($_POST['mode'])?$_POST['mode']:""),
	'log_results' => urlencode('1'));

$fields_string="";
foreach($field as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');


$url = "$apipath/v1/getKey"; 

//open connection
$ch = curl_init();

//HEADER SET FOR LOCAL DEV ONLY - curl_header_host set in api_config
if(isset($curl_header_host)) {
	//curl_setopt($ch, CURLOPT_HTTPHEADER, $curl_header_host);
}

curl_setopt($ch,CURLOPT_URL, $url);
curl_setopt($ch,CURLOPT_POST, count($field));
curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//curl_setopt($ch, CURLOPT_USERPWD, "user:pass");
//curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

//execute post
$json = curl_exec($ch);


//close connection
curl_close($ch);


/* if APIKEY was created OK then create the api-config file automatically */
$json_temp=json_decode($json, true);



$apikeytemp=$json_temp['APIKEY'];
$apisecrettemp=$json_temp['APISECRET'];
$configfile="<?php\n\$apipath=\"https://api.toridion.com\";\n\$tqnnAPIKEY=\"$apikeytemp\";\n\$tqnnAPISECRET=\"$apisecrettemp\";\n?>";

$fp=fopen("../api-config.php","w+");
fwrite($fp,$configfile,strlen($configfile));
fclose($fp);




echo $json;

?>