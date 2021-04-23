function consolecheck(){
	
	var isPlaystation4 = false;
	
	var ua = navigator.userAgent;
	var fwVersionp34 = ua.substring(ua.indexOf('5.0 (') + 19, ua.indexOf(") Apple"));
		
	
	switch (navigator.platform) {
		
		case "PlayStation 4":
			isPlaystation4 = true;
			break;
		
		default:
			alert("Vous n'\u00eates pas sur une console compatible!\n                                 .-----------.\n                               /  No Way! \\ \n                              |  *__    __* |\n                              | )/    \\   /    \\( |\n                              |/ \\__/   \\__/ \\|	\n                             /         /^\\         \\ \n                             \\__    '='     __/\n                                  |\\          /|\n                                  |\\ '*xx*' /|\n                                  \\ '*****' / \n                                   `-.__.-'\n\n                   >> Fermer le navigateur <<");
			window.stop();
			
			isPlaystation4 = false;
			break;
	}


	if (isPlaystation4) {
		switch (fwVersionp34) {
			
			case ps4fwCompat[0]:
			   
				alert("Your PS4 firmware is " + fwVersionp34 + " : Great !!\n\n You can use the GoldHen payload to play your backup !!!");
				document.location.href="/672/index.html"
			    break;
				
			default:
				alert("Humm hummmm Go back please !\n\n Your PS4 firmware is " + fwVersionp34 + " and this is not your world.");
				window.stop();
				break;
		}
	}

	
}