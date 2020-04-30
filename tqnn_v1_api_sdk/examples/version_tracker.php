<?php
/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename:version_tracker.php
description: calculate a hash from all the CSS and JS files used by the system and echo/save to a file
This can then be appended to any javascript or css file as a parameter to change the include url and prevent cache issues when scripts/styles change.


*/


$hash1=hash('sha256',file_get_contents("scripts/examples.js"));
$hash2=hash('sha256',file_get_contents("styles/style.css"));

echo hash('sha256',"$hash1$hash2");

?>