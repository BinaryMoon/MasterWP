---
---
{% include_relative mwp-smooth-scroll.js %}

{% include_relative mwp-natural-language-form.js %}

{% include_relative mwp-filter-themes.js %}

;( function( window, document, $ ) {

	'use strict';

	/**
	 * Do all the stuffs.
	 */
	$( document ).ready(
		function() {

			MWP_NaturalLanguageForm.init();
			MWP_SmoothScroll.init();
			MWP_FilterThemes.init();

		}
	);

} )( window, document, jQuery );
