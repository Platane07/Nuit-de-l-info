<?php

add_action( 'wp_ajax_get_user_coords', 'get_user_coords_json' );
add_action( 'wp_ajax_nopriv_get_user_coords', 'get_user_coords_json' );
function get_user_coords_json() {
	$coords = get_user_coords();
	if ( $coords ) {
		wp_send_json_success( $coords );
	} else {
		wp_send_json_error();
	}
}