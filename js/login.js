$("button#submit").click( function() {
	 
	 
	 if( $("#username").val() == "" || $("#password").val() == "" ){
	 	$("div#acklogin").html("Please enter both username and password");
	 }
	 else{
	 	$.post( $("#loginform").attr("action"), 
		        $("#loginform :input").serializeArray(), 
				function(data) {
					$("div#acklogin").html(data);
					} );
	 }
	 $("#loginform").submit( function() {
		 return false;
	 });
});