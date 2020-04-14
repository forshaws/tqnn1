<?php


/*
filename: index.php
Author Scot D Forshaw
Copyright 2015 S D Forshaw
*/

if(!file_exists("api_config.php")){
echo "<script javascript>document.location.href='tqnn_v1_api_sdk/setup/';</script>";


}
else{

echo "<script javascript>document.location.href='examples/';</script>";
}

?>


