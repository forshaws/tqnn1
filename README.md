# README #

The TQNN API is a suite of thin client functions and examples for accessing Toridions TQNN authAPI functions from LAMP systems.
The examples are written in PHP and JS.  

### What is this repository for? ###

* Installing basic TQNN auth API function on a PHP/LAMP server
* Version 1.0
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### Deploy directy to IBM cloud ###

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/forshaws/tqnn1.git)

### How do I get set up? ###

* Just clone the repository to a folder of choice and navigate to it with your browser
* Obtain an APIKEY and APISECTRET from Toridion directly or use the provided demo keys in the php files
* Requires access to the Toridion API
* create a file called api-config.php in the tqnn_v1_api_sdk/ folder and enter the following:-

<?php
$apipath="https://api.toridion.com"; //the path to your API - default is Toridion public API
?>

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* S Forshaw
* Tors