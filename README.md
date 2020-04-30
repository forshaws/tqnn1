# README #

Build a high performance Data Faric for the sharing and validation of critical data using TORIDION TQNN&trade; Machine Learning authID&trade; API suite. This application provides a suite of thin client functions and examples scripts for implementing database free data sharing and identity validation via the Toridion TQNN authID&trade; API functions.

The examples are written in PHP and JS.  

### What is this repository for? ###

* Installing basic TQNN&trade; authID&trade; API functions on a PHP stack
* Version 1.0.2 BETA
* [Website](https://www.toridion.com/page/authid-on-ibm-cloud)

### Deploy directy to IBM Cloud&trade; [recommended] ###

You can install this software directly onto IBM Cloud infrastructure using a single click. This service will guide you through creating an IBM Cloud account if you do not have one already. 
It will also create the required toolchain and pipelines and install all PHP stack requirements. At the end of the process you will have launched a fully configured TQNN Data Fabric end point with example applications

* Click the Deploy to IBM Cloud

[![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/forshaws/tqnn1.git)

* Once the SDK is installed on your IBM Cloud&reg; click "Get Key" in the Start/Setup menu
* Follow the instructions on screen to configure the SDK and thin client applications

### Existing Users ###
Clone the application or spin up on IBM Cloud&reg; as above. From the main screen choose the section "Already have a Key?". Here you can enter your pre existing keys to configure the application. 

### How do I get set up manually? ###

* Clone the repository to a folder of choice and navigate to it with your browser
* Obtain an APIKEY and APISECRET from Toridion directly or use the provided demo keys in the php files
* Requires access to the Toridion API
* create a file called api-config.php in the tqnn_v1_api_sdk/ folder and enter the following:-

<?php
$apipath="https://api.toridion.com"; //the path to your API - default is Toridion public API
?>

### Contribution guidelines ###

There are currently no contribution guidelines

### Who do I talk to? ###

* S Forshaw at Toridion : Twitter me @softwaregur1 
