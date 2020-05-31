/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: examples/scripts/examples.js
description: Simple JS wrappers for calling TQNN API basic auth and validation functions

version 1.0.1
*/

function authIDExample(){

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var user_request_id=document.getElementById('user_request_id').value;
	var dataset=document.getElementById('dataset').value;
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	document.getElementById('action_button').disabled=true;
	
	prc=1;

	$.post("../authID.php", { username:username, password:password, multihash:1, dataset:dataset, returnauthtoken:1, user_request_id:user_request_id},
	function(data,status) {
	

		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){
		
			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			
			if(json.error_message == "INVALID_OR_MISSING_CREDENTIALS"){
				$("#valid").hide();
				$("#invalid").show();
				document.getElementById("api_response_div").style.backgroundColor = 'red';
			}

			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str; //put response into the textarea
			
			switch(json.tqnn_response){
			
			case "AUTHENTICATION_OK":
				$("#valid").show();
				$("#invalid").hide();
				document.getElementById("api_response_div").style.backgroundColor = 'green';
			break;
			
			case "AUTHENTICATION_FAILED":
				$("#valid").hide();
				$("#invalid").show();
				document.getElementById("api_response_div").style.backgroundColor = 'red';
			break;

			}
			
					
		}

	}).done(function() {
		prc=0;
		document.getElementById('action_button').disabled=false;
  
	  }).error(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;

	});


}

function registerIDExample(){

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var user_request_id=document.getElementById('user_request_id').value;
	var dataset=document.getElementById('dataset').value;
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	prc=1;
	
	document.getElementById('action_button').disabled=true;
	
	$.post("../registerID.php", { credential0:username, credential1:password, multihash:1, dataset:dataset, returnauthtoken:1, user_request_id:user_request_id},
	function(data,status) {
	
		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			
			if(json.error_message == "INVALID_OR_MISSING_CREDENTIALS"){
				$("#valid").hide();
				$("#invalid").show();
				document.getElementById("api_response_div").style.backgroundColor = 'red';
			}
			
			if(json.error_message == "UNKNOWN_API_ERROR"){
				$("#valid").hide();
				$("#invalid").show();
				document.getElementById("api_response_div").style.backgroundColor = 'red';
			}
			
			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2)
			document.getElementById('api_response').value=str;		
			
			switch(json.tqnn_response){
			
			case "REGISTERED_OK":
				$("#valid").show();
				$("#invalid").hide();
				document.getElementById("api_response_div").style.backgroundColor = 'green';
			break;


			}
		}

	}).done(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;
  
	  }).error(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;

	});

}

function updateIDExample(){

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var new_password=document.getElementById('new_password').value;
	var user_request_id=document.getElementById('user_request_id').value;
	var dataset=document.getElementById('dataset').value;
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	prc=1;
	
	document.getElementById('action_button').disabled=true;
	
	$.post("../updateID.php", { username:username, password:password, new_password:new_password,multihash:1, dataset:dataset, returnauthtoken:1, user_request_id:user_request_id},
	function(data,status) {
	
		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2)
			document.getElementById('api_response').value=str;		
		}

	}).done(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;
  
	  }).error(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;

	});

}

function revokeIDExample(){

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	var user_request_id=document.getElementById('user_request_id').value;
	var dataset=document.getElementById('dataset').value;
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	prc=1;
	
	document.getElementById('action_button').disabled=true;
	
	$.post("../revokeID.php", { username:username, password:password, multihash:1, dataset:dataset, returnauthtoken:1, user_request_id:user_request_id},
	function(data,status) {
	
		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2)
			document.getElementById('api_response').value=str;		
		}

	}).done(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;
  
	  }).error(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;

	});

}

function searchPatternExample(){

	var pattern=document.getElementById('pattern').value;
	var return_filelist=document.getElementById('filelist').checked;
	var user_request_id=document.getElementById('user_request_id').value;
	var dataset=document.getElementById('dataset').value;	
	
	var filelist=0;
	if(return_filelist){
	var filelist=1;
	}
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	document.getElementById('action_button').disabled=true;
	
	prc=1;

	$.post("../searchPattern.php", { pattern:pattern, filelist:filelist, dataset:dataset, user_request_id:user_request_id},
	function(data,status) {
	
		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2)
			document.getElementById('api_response').value=str;		
		}

	}).done(function() {
		prc=0;
		document.getElementById('action_button').disabled=false;
  
	  }).error(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;

	});


}

function storePatternExample(){

	var pattern=document.getElementById('pattern').value;
	var user_request_id=document.getElementById('user_request_id').value;
    var dataset=document.getElementById('dataset').value;
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	prc=1;
	
	document.getElementById('action_button').disabled=true;
	
	$.post("../storePattern.php",  { pattern:pattern, dataset:dataset, user_request_id:user_request_id},
	function(data,status) {
	
		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2)
			document.getElementById('api_response').value=str;		
		}

	}).done(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;
  
	  }).error(function() {
		prc=0;
		
		document.getElementById('action_button').disabled=false;

	});

}

function load_html_assets(){

var unix = Math.round(+new Date()/1000);


	fetch("assets/html/header.html?v="+unix+"")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		document.querySelector("header").innerHTML = data;
		var config=readCookie("CONFIGPRESENT");

		if(config=="1"){
		$("#setuplink").hide();
		}
		
	  });




	fetch("assets/html/footer.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		document.querySelector("footer").innerHTML = data;
	  });








}

function readCookie(name) {
    return (name = new RegExp('(?:^|;\\s*)' + ('' + name).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + '=([^;]*)').exec(document.cookie)) && name[1];
}