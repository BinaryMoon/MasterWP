---
---
{% include_relative mwp-smooth-scroll.js %}

{% include_relative mwp-responsive-iframe.js %}

{% include_relative mwp-natural-language-form.js %}

{% include_relative mwp-contact.js %}

{% include_relative mwp-filter-themes.js %}

{% include_relative mwp-theme-list.js %}

{% include_relative mwp-check-mailchimp.js %}

{% include_relative mwp-countdown.js %}

{% include_relative jquery.slider.js %}

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
			MWP_ThemeList.init();
			MWP_ResponsiveIframe.init();
			MWP_Countdown.init( '.countdown-clock' );
			MWP_CheckMailchimp.init();
			MWP_Contact.init();

			$( '.testimonials' ).elementalSlides(
				{
					group_selector: '.testimonial',
					autoplay: 1,
					nav_arrows: true,
				}
			);

		}
	);

} )( window, document, jQuery );
