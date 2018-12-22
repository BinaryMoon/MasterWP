/**
 *
 */
var MWP_CheckMailchimp = (function() {


	/**
	 *
	 */
	var init = function() {

		if ( 0 === $( '.display_archive' ).length ) {
			$( '.script-load-warning' ).show();
		}

	};


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
