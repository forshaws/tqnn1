<?php

/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: examples/updateID.php
description: Thin client script that communicates with the Toridion uodateID API


*/

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
	'username' => urlencode(isset($_POST['username'])?$_POST['username']:""),
	'password' => urlencode(isset($_POST['password'])?$_POST['password']:""),
	'new_password' => urlencode(isset($_POST['new_password'])?$_POST['new_password']:""),
	'multihash' => urlencode(isset($_POST['multihash'])?$_POST['multihash']:""),
	'returnauthtoken' => urlencode(isset($_POST['returnauthtoken'])?$_POST['returnauthtoken']:""),
	'dataset' => urlencode(isset($_POST['dataset'])?$_POST['dataset']:""),
	'mode' => urlencode(isset($_POST['mode'])?$_POST['mode']:""),
	'log_results' => urlencode('1'));

$fields_string="";
foreach($field as $key=>$value) { $fields_string .= $key.'='.$value.'&'; }
rtrim($fields_string, '&');

$url = "https://api.toridion.com/v1/updateID"; 

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
//curl_setopt($ch, CURLOPT_USERPWD, "wearecommit:password1!");
//curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

//execute post
$json = curl_exec($ch);


//close connection
curl_close($ch);

echo $json;

?>
