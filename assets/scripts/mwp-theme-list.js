/**
 * Functions related to the theme list.
 */
var MWP_ThemeList = (function() {

	/**
	 * Show the theme hover information
	 *
	 * @param  {object} what Theme element being hovered.
	 */
	var showThemeInfo = function( what ) {

		var $what = $( what );
		var $screenshot = $what.find( '.theme-hover img' );

		// If there's no image source then replace it with the data source.
		// Acts as lazy loading so we don't load all the screenshots at once.
		if ( ! $screenshot.attr( 'src' ) ) {
			$screenshot.attr( 'src', $screenshot.data( 'src' ) );
		}

		$( what ).find( '.theme-hover' ).show();

	}


	/**
	 * Hide the theme hover information
	 *
	 * @param  {object} what Theme element being hovered.
	 */
	var hideThemeInfo = function( what ) {

		$( what ).find( '.theme-hover' ).hide();

	}


	/**
	 * Initialize the themes info.
	 */
	var init = function() {

		$( '.themes-list .theme' ).on(
			'mouseover',
			function() {

				showThemeInfo( this );

			}
		);

		$( '.themes-list .theme' ).on(
			'mouseout',
			function() {

				hideThemeInfo( this );

			}
		);

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
