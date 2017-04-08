/**
 * Filter and sort themes list according to the properties set out in the natural language form.
 */
var MWP_FilterThemes = (function() {

	/**
	 * Filter the visibility of the themes.
	 */
	var filter = function() {

		var type = $( 'select.theme-type' ).val();
		var feature1 = $( 'select.theme-feature-1' ).val();
		var feature2 = $( 'select.theme-feature-2' ).val();
		var theme_tags = [];
		var $themes = $( '.themes-list .theme' );

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
			$themes.show();
			return;
		}

		// Hide all themes.
		$themes.hide();

		$themes.each(
			function() {

				var $this = $( this );
				var properties = $this.data( 'tags' ).split( ' ' );

				//console.log( 'compare', theme_tags, properties, compareArrays( theme_tags, properties ) );
				if ( compareArrays( theme_tags, properties ) ) {
					$this.show();
				}

			}
		);

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

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
