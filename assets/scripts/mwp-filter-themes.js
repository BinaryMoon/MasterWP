/**
 * Filter and sort themes list according to the properties set out in the natural language form.
 */
var MWP_FilterThemes = (function() {

	// The themes on the page.
	var $themes = [];

	// Error message. Displays when there are no themes to show.
	var $errorBox = null;


	/**
	 * Filter the visibility of the themes.
	 */
	var filter = function() {

		// Get properties.
		var type = $( 'select.theme-type' ).val();
		var feature1 = $( 'select.theme-feature-1' ).val();
		var feature2 = $( 'select.theme-feature-2' ).val();

		// List of tags based on the properties collected above.
		var theme_tags = [];

		// Make sure user has selected a theme type.
		if ( type !== 'any' ) {
			theme_tags.push( type );
		}

		// Make sure the user has selected a theme feature.
		if ( feature1 !== 'any' ) {
			theme_tags.push( feature1 );
		}

		// Make sure the user has selected a theme feature, and that it's different to feature1.
		if ( feature2 !== 'any' && feature1 !== feature2 ) {
			theme_tags.push( feature2 );
		}

		// Quit early if there's nothing to test.
		if ( theme_tags.length <= 0 ) {
			// Nothing to test so display all themes.
			$themes.show();
			// Hide the error box.
			displayError();
			return;
		}

		// Loop through all themes and then show or hide them based on what properties have been selected.
		$themes.each(
			function() {

				var $this = $( this );
				var properties = $this.data( 'tags' ).split( ' ' );

				// A theme has to have all selected theme tags to be displayed.
				if ( compareArrays( theme_tags, properties ) ) {
					$this.show();
				} else {
					$this.hide();
				}

			}
		);

		displayError();

	}


	/**
	 * Sort the themes.
	 */
	var sort = function() {

		console.log( 'sort' );

	}


	/**
	 * Compare the values of two arrays.
	 * To return true, all of the items in array1 should appear in array2
	 * Uses jQuerys inArray function.
	 *
	 * @param  {array} array1 List one.
	 * @param  {array} array2 List two.
	 * @return {boolean}
	 */
	var compareArrays = function( array1, array2 ) {

		for ( var i = 0; i < array1.length; i ++ ) {

			// If the value isn't in the array then return false.
			// inArray returns the found items position, or -1 if not found - hence the comparison < 0
			// https://api.jquery.com/jQuery.inArray/
			if ( $.inArray( array1[i], array2 ) < 0 ) {
				return false;
			}

		}

		return true;

	}


	/**
	 * Show or hide an error message depending upon if there are any themes to display or not.
	 */
	var displayError = function() {

		var count = $themes.find( ':visible' ).length;

		if ( count > 0 ) {
			$errorBox.hide();
		} else {
			$errorBox.show();
		}

	}

	/**
	 * Initialise the filtering.
	 */
	var init = function() {

		// Listen for custom event triggered by the natural language form changing.
		$( 'body' ).on(
			'nl:change',
			function() {

				filter();
				sort();

			}
		);

		// Grab themes list.
		$themes = $( '.themes-list .theme' );

		// Grab the message box deets.
		$errorBox = $( '.message.no-themes' );

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
