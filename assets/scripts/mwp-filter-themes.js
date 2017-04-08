/**
 *
 */
var MWP_FilterThemes = (function() {


	var filter = function() {

		console.log( 'filter' );

	}

	var sort = function() {

		console.log( 'sort' );

	}



	/**
	 *
	 */
	var init = function() {

		$( 'body' ).on( 'nl:change', function() {

			filter();
			sort();

		} );

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
