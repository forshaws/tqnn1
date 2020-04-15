# README #

The TQNN API is a suite of thin client functions and examples for accessing Toridions TQNN authAPI functions.
The examples are written in PHP and JS.  

### What is this repository for? ###

* Installing basic TQNN auth API function on a PHP stack
* Version 1.0 BETA
* [Website](https://www.toridion.com/page/authid-on-ibm-cloud)

### Deploy directy to IBM cloud [recommended] ###

You can install this software directly onto IBM Cloud infrastructure using a single click. This service will guide youb through creating an IBM Cloud account if you do not have one already. 
It will also create the required toolchain and pipelines.

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/forshaws/tqnn1.git)

### How do I get set up manually? ###

* Clone the repository to a folder of choice and navigate to it with your browser
* Obtain an APIKEY and APISECTRET from Toridion directly or use the provided demo keys in the php files
* Requires access to the Toridion API
* create a file called api-config.php in the tqnn_v1_api_sdk/ folder and enter the following:-

<?php
$apipath="https://api.toridion.com"; //the path to your API - default is Toridion public API
?>

### Contribution guidelines ###

There are currently no contribution guidelines

### Who do I talk to? ###

* S Forshaw at Toridion : Twitter me @softwaregur1 
