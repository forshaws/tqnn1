<?php

/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: examples/registerID.php
description: Thin client script that communicates with the Toridion registerID API


*/
if(file_exists("api-config.php")){
include("api-config.php");
}
else{
$apipath="https://api.toridion.com";
}
$tqnnAPIKEY="123456789";
$tqnnAPISECRET="123456789";

//format a curl request and send it to the API
date_default_timezone_set('GMT');
$datestamp=date('Y-m-d H:i:s');
$user_request_id="example";

$field = array(
	'tqnnAPIKEY' => urlencode($tqnnAPIKEY),
	'tqnnAPISECRET' => urlencode($tqnnAPISECRET),
	'user_request_id' => urlencode($user_request_id),
	'credential0' => urlencode(isset($_POST['credential0'])?$_POST['credential0']:""),
	'credential1' => urlencode(isset($_POST['credential1'])?$_POST['credential1']:""),
	'credential2' => urlencode(isset($_POST['credential2'])?$_POST['credential2']:""),
	'credential3' => urlencode(isset($_POST['credential3'])?$_POST['credential3']:""),
	'credential4' => urlencode(isset($_POST['credential4'])?$_POST['credential4']:""),
	'credential5' => urlencode(isset($_POST['credential5'])?$_POST['credential5']:""),
	'credential6' => urlencode(isset($_POST['credential6'])?$_POST['credential6']:""),
	'credential7' => urlencode(isset($_POST['credential7'])?$_POST['credential7']:""),
	'credential8' => urlencode(isset($_POST['credential8'])?$_POST['credential8']:""),
	'credential9' => urlencode(isset($_POST['credential9'])?$_POST['credential9']:""),
	'multihash' => urlencode(isset($_POST['multihash'])?$_POST['multihash']:""),
	'returnauthtoken' => urlencode(isset($_POST['returnauthtoken'])?$_POST['returnauthtoken']:""),
	'dataset' => urlencode(isset($_POST['dataset'])?$_POST['dataset']:""),
	'mode' => urlencode(isset($_POST['mode'])?$_POST['mode']:""),
	'log_results' => urlencode('1'));

$fields_string="";
foreach($field as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');

$url = "$apipath/v1/registerID"; 

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
