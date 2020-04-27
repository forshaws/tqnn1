/*

Author: Scott D Forshaw :: Visicom Scientific Software :: Copyright 2017 ARR

Twitter: @softwareguru1
email: scot.forshaw@gmail.com

filename: setup/scripts/setup.js
description: JS wrappers for TQNN API setup and configuration functions


*/

function load_html_assets(src){

	fetch("assets/html/header.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		document.querySelector("header").innerHTML = data;
	  });




	fetch("assets/html/footer.html")
	  .then(response => {
		return response.text()
	  })
	  .then(data => {
		document.querySelector("footer").innerHTML = data;
	  });

}

function getKey(){


	if (!document.getElementById("accept_terms").checked) {

		alert("You must read and agree to the terms of service before you can request an APIKEY and APISECRET");
		document.getElementById("accept_terms").focus();
		return false;

	} 

	if (confirm("You are requesting an TORIDION APIKEY and APISECRET. Please ensure you have recorded your username and password safely offline and that you completed the details accurately as mistakes may not be corrected due to the security level of the Toridion system.\n\nIf you are happy please press [OK]")) {

	
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

		$.post("getKey.php", { username:username, password:password, multihash:1, dataset:dataset, returnauthtoken:1, user_request_id:user_request_id},
		function(data,status) {
	
			var json=JSON.parse(data);

			if(json.error_message != "" && json.error_message != undefined  ){
		
				var str = JSON.stringify(json, null, 2);
				document.getElementById('api_response').value=str;
				return;
			
			}
			else{

				var str = JSON.stringify(json, null, 2);
				//document.getElementById('api_response').value=str; //put response into the textarea
			
				switch(json.tqnn_response){
			
				case "APIKEY_CREATE_OK":
					alert("Your API access keys we created. Please write the following details down and keep the safe. A copy of the keys are stored locally on this server in the file api-config.php\n\n\nAPIKEY:"+json.APIKEY+"\nAPISECRET:"+json.APISECRET+"");
					document.location.href='/';
				break;
			
				case "APIKEY_CREATE_FAILED":
					alert("There was a problem creating your APIKEY and APISECRET. Try again or contact support if the problem continues.");
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

	

	} else {
	
			return false;
	
}
}

function setKey(){



if (confirm("You are about to configure the authID API access keys. Please check the keys are correct before pressing OK.")) {

return false;

} else {



  
}


}