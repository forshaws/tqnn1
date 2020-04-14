function authIDExample(){

	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	document.getElementById('action_button').disabled=true;
	
	prc=1;

	$.post("../authID.php", { username:username, password:password, multihash:1, dataset:"cache", returnauthtoken:1},
	function(data,status) {
	
	// alert(data);

		var json=JSON.parse(data);

		if(json.error_message != "" && json.error_message != undefined  ){
		
			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str;
			return;
			
		}
		else{

			var str = JSON.stringify(json, null, 2);
			document.getElementById('api_response').value=str; //put response into the textarea
			
			switch(json.tqnn_response){
			
			case "AUTHENTICATION_OK":
				alert("Credentials are valid");
			break;
			
			case "AUTHENTICATION_FAILED":
				alert("Credentials are invalid");
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
	
	if(!window.navigator.onLine){
		alert("Cannot connect to the Internet. Check your connection and try again");
		return false;		
	}
	
	prc=1;
	
	document.getElementById('action_button').disabled=true;
	
	/*
	An alternative to straightforward registration is to first test if the account already exists
	if it does do not try to register it again.
	*/

	$.post("../registerID.php", { credential0:username, credential1:password, multihash:1, dataset:"cache", returnauthtoken:1},
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

alert("To obtain a key at this time contact info@toridion.com");


}