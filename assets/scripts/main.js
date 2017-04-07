---
---
{% include_relative mwp-smooth-scroll.js %}

{% include_relative mwp-natural-language-form.js %}

;( function( window, document, $ ) {

	'use strict';

	/**
	 * Do all the stuffs.
	 */
	$( document ).ready(
		function() {

			MWP_NaturalLanguageForm.init();
			MWP_SmoothScroll.init();

		}
	);

} )( window, document, jQuery );
