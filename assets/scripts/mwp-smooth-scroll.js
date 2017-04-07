/**
 * Smoothly scroll a page to an anchor.
 */
var MWP_SmoothScroll = (function() {

	"use strict";


	/**
	 * Smoothly scroll to the specified anchor.
	 *
	 * @param  {object} e Selected element.
	 * @return {false}
	 */
	var scroll = function( e ) {

		var $target = $( e.hash );

		if ( $target.length ) {
			var targetOffset = $target.offset().top - parseInt( $( 'html' ).css( 'margin-top' ) );
			$( 'html,body' ).animate(
				{
					scrollTop: targetOffset
				},
				750
			);
			focus_element( e.hash );
		}

		return false;

	}


	/**
	 * Initialize the smooth scrolling.
	 */
	var init = function() {

		$( '.scroll-to' ).click(
			function() {

				return scroll( this );

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
