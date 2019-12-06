



















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

    
    // Conversion latitude dd en dms
    latCardinaux = (lat >= 0)? 'N' : 'S';
    latDMS = Math.abs(lat);
    latDeg = Math.floor(latDMS); 
    latResult = latDeg + "\º"; 
    latMin = Math.floor((latDMS - latDeg) * 60);
    latResult += latMin +"\'"+latCardinaux;
	console.log(latResult);
	latResult = String(latResult);

	// Conversion longitude dd en dms
    lngCardinaux = (lat >= 0)? 'E' : 'W';
    lngDMS = Math.abs(lng);
   	lngDeg = Math.floor(lngDMS); 
    lngResult = lngDeg + "\º";
    lngMin = Math.floor((lngDMS - lngDeg) * 60);
    lngResult += lngMin +"\'"+lngCardinaux;
    console.log(lngResult);
    lngResult = String(lngResult);




   
    // Do stuff
    var div = document.getElementById("navigation").innerHTML="<iframe style=\"border: 0;\"src=\"https://www.google.com/maps/place/"+latResult+"+"+lngResult+"/@"+lat+","+lng+"\" width=\"600\" height=\"450\" frameborder=\"0\"></iframe>";
       console.log("https://www.google.com/maps/place/"+latResult+"+"+lngResult+"/@"+lat+","+lng+"' width='600' height='450' frameborder='0'></iframe>");


}

function alternative() {
	$.ajax({
		// pensez à définir le chemin vers admin-ajax.php…
		// … en front via localize_script()…
		// … au moment de l'enqueue de votre script
		url:'maps.php',
		type:'GET'
		data:'str'
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