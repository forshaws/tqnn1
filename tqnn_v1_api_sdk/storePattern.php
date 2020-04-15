<?php

/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: examples/storPattern.php
description: Thin client script that communicates with the Toridion storePattern API


*/

include("configAPI.php");

$field = array(
	'tqnnAPIKEY' => urlencode($tqnnAPIKEY),
	'tqnnAPISECRET' => urlencode($tqnnAPISECRET),
	'user_request_id' => urlencode(isset($_POST['user_request_id'])?$_POST['user_request_id']:"notset"),
	'pattern' => urlencode(isset($_POST['pattern'])?$_POST['pattern']:""),
	'dataset' => urlencode(isset($_POST['dataset'])?$_POST['dataset']:""),
	'mode' => urlencode(isset($_POST['mode'])?$_POST['mode']:""),
	'log_results' => urlencode('1'));

$fields_string="";
foreach($field as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');


$url = "$apipath/v1/storePattern"; 

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

echo $json;

?>
