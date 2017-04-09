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
