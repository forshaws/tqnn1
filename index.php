<?php


/*
filename: index.php
Author Scot D Forshaw
Copyright 2015 S D Forshaw
*/


if(file_exists('tqnn_v1_api_sdk/api-config.php')){
	$__CONFIGPRESENT="1";
	$expire= time() + (1 * 60 * 60 * 365); //1 year
	@setcookie("CONFIGPRESENT","1",$expire,"/");
	echo "<script javascript>document.location.href='tqnn_v1_api_sdk/examples/';</script>";

}
else{
	$__CONFIGPRESENT="0";
	@setcookie("CONFIGPRESENT","",-1,"/");
	echo "<script javascript>document.location.href='tqnn_v1_api_sdk/setup/';</script>";

}

?>


