// On vérifie que la méthode est implémenté dans le navigateur
if ( navigator.geolocation ) {
	// On demande d'envoyer la position courante à la fonction callback
	navigator.geolocation.getCurrentPosition( callback, erreur );
} else {
	// Function alternative sinon
	alternative();
}

function erreur( error ) {
	switch( error.code ) {
		case error.PERMISSION_DENIED:
			console.log( 'L\'utilisateur a refusé la demande' );
			break;     
		case error.POSITION_UNAVAILABLE:
			console.log( 'Position indéterminée' );
			break;
		case error.TIMEOUT:
			console.log( 'Réponse trop lente' );
			break;
	}
	// Function alternative
	alternative();
};

function callback( position ) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log( lat, lng );
    var latResult, lngResult;
    console.log("45.1840925");
    console.log("45°11'N");
    var latconvert, latDeg, latMin, latCardinaux;
    var lngconvert, lngDeg, lngMin, lngCardinaux;

    latCardinaux = (lat >= 0)? 'N' : 'S';

   // Here you'll convert the value received in the parameter to an absolute value.
   // Conversion of negative to positive.
   // In this step it does not matter if it's North, South, East or West,
   // such verification was performed earlier.
   latDMS = Math.abs(lat); // -40.601203 = 40.601203

   // ---- Degrees ----
   // Stores the integer of DD for the Degrees value in DMS
   latDeg = Math.floor(latDMS); // 40.601203 = 40

   // Add the degrees value to the result by adding the degrees symbol "º".
   latResult = latDeg + "\º"; // 40º

   // ---- Minutes ----
   // Removing the integer of the initial value you get the decimal portion.
   // Multiply the decimal portion by 60.
   // Math.floor returns an integer discarding the decimal portion.
   // ((40.601203 - 40 = 0.601203) * 60 = 36.07218) = 36
   latMin = Math.floor((latDMS - latDeg) * 60); // 36.07218 = 36

   // Add minutes to the result, adding the symbol minutes "'".
   latResult += latMin +"\'"+latCardinaux; // 40º36'

   // ---- Seconds ----
   // To get the value in seconds is required:
   // 1º - removing the degree value to the initial value: 40 - 40.601203 = 0.601203;
   // 2º - convert the value minutes (36') in decimal ( valMin/60 = 0.6) so
   // you can subtract the previous value: 0.601203 - 0.6 = 0.001203;
   // 3º - now that you have the seconds value in decimal,
   // you need to convert it into seconds of degree.
   // To do so multiply this value (0.001203) by 3600, which is
   // the number of seconds in a degree.
   // You get 0.001203 * 3600 = 4.3308
   // As you are using the function Math.round(),
   // which rounds a value to the next unit,
   // you can control the number of decimal places
   // by multiplying by 1000 before Math.round
   // and subsequent division by 1000 after Math.round function.
   // You get 4.3308 * 1000 = 4330.8 -> Math.round = 4331 -> 4331 / 1000 = 4.331
   // In this case the final value will have three decimal places.
   // If you only want two decimal places
   // just replace the value 1000 by 100.
   

   // Add the seconds value to the result,
   // adding the seconds symbol " " ".
   

   // Returns the resulting string.
   console.log(latResult);
   latResult = String(latResult);

   lngCardinaux = (lat >= 0)? 'E' : 'W';

   // Here you'll convert the value received in the parameter to an absolute value.
   // Conversion of negative to positive.
   // In this step it does not matter if it's North, South, East or West,
   // such verification was performed earlier.
   lngDMS = Math.abs(lng); // -40.601203 = 40.601203

   // ---- Degrees ----
   // Stores the integer of DD for the Degrees value in DMS
   lngDeg = Math.floor(lngDMS); // 40.601203 = 40

   // Add the degrees value to the result by adding the degrees symbol "º".
   lngResult = lngDeg + "\º"; // 40º

   // ---- Minutes ----
   // Removing the integer of the initial value you get the decimal portion.
   // Multiply the decimal portion by 60.
   // Math.floor returns an integer discarding the decimal portion.
   // ((40.601203 - 40 = 0.601203) * 60 = 36.07218) = 36
   lngMin = Math.floor((lngDMS - lngDeg) * 60); // 36.07218 = 36

   // Add minutes to the result, adding the symbol minutes "'".
   lngResult += lngMin +"\'"+lngCardinaux; // 40º36'

   // ---- Seconds ----
   // To get the value in seconds is required:
   // 1º - removing the degree value to the initial value: 40 - 40.601203 = 0.601203;
   // 2º - convert the value minutes (36') in decimal ( valMin/60 = 0.6) so
   // you can subtract the previous value: 0.601203 - 0.6 = 0.001203;
   // 3º - now that you have the seconds value in decimal,
   // you need to convert it into seconds of degree.
   // To do so multiply this value (0.001203) by 3600, which is
   // the number of seconds in a degree.
   // You get 0.001203 * 3600 = 4.3308
   // As you are using the function Math.round(),
   // which rounds a value to the next unit,
   // you can control the number of decimal places
   // by multiplying by 1000 before Math.round
   // and subsequent division by 1000 after Math.round function.
   // You get 4.3308 * 1000 = 4330.8 -> Math.round = 4331 -> 4331 / 1000 = 4.331
   // In this case the final value will have three decimal places.
   // If you only want two decimal places
   // just replace the value 1000 by 100.
   

   // Add the seconds value to the result,
   // adding the seconds symbol " " ".
   

   // Returns the resulting string.
   console.log(lngResult);
   lngResult = String(lngResult);




   
    // Do stuff
    var div = document.getElementById("navigation").innerHTML="<iframe style=\"border: 0;\"src=\"https://www.google.com/maps/place/"+latResult+"+"+lngResult+"/@"+lat+","+lng+"\" width=\"600\" height=\"450\" frameborder=\"0\"></iframe>";
	/*var svg = document.createElement("svg");
       svg.innerHTML = "<iframe style='border: 0'; src='https://www.google.com/maps/search/"+lat+","+lng+"' width='600' height='450' frameborder='0'></iframe>";
       //console.log("<iframe style='border: 0'; src='https://www.google.com/maps/search/"+lat+","+lng+"' width='600' height='450' frameborder='0'></iframe>")
       div.innerHMTL = svg;*/
       console.log("https://www.google.com/maps/place/"+latResult+"+"+lngResult+"/@"+lat+","+lng+"' width='600' height='450' frameborder='0'></iframe>");


}

function alternative() {
	$.ajax({
		// pensez à définir le chemin vers admin-ajax.php…
		// … en front via localize_script()…
		// … au moment de l'enqueue de votre script
		url:'maps.php',
		data:{
			action:get_user_coords
		}
	}).done( function( data ){
		if ( data.success ) {
			var lat = data.data.lat;
			var lat = data.data.lng;
    		console.log( lat, lng );
			// Do stuff
		}
	});
}