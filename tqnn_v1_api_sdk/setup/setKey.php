<?php
/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename:setup/setKey.php
description: automatically generates an api-config.php file using provided 


*/

//determin the new APIPATH if passed


$apikeytemp=$_POST['apikey'];
$apisecrettemp=$_POST['apisecret'];
$selectedapipath=$_POST['selectedapipath'];

	
						
						
$configfile="<?php\n\$apipath=\"$selectedapipath\";\n\$tqnnAPIKEY=\"$apikeytemp\";\n\$tqnnAPISECRET=\"$apisecrettemp\";\n?>";

$fp=fopen("../api-config.php","w+");
fwrite($fp,$configfile,strlen($configfile));
fclose($fp);




$message="APIKEY_CREATE_OK";
	$returnObject = array(
			  'tqnn_response' => $message
			);

echo json_encode($returnObject);
?>