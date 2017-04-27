/**
 * Add a div wrapper around iframes so that they can be targetted by css.
 */
var MWP_ResponsiveIframe = (function() {

	/**
	 * Selectors suitable for video providers.
	 *
	 * @type {Array}
	 */
	var selectors = [
		'iframe[src*="player.vimeo.com"]',
		'iframe[src*="youtube.com"]',
		'iframe[src*="youtube-nocookie.com"]',
		'iframe[src*="kickstarter.com"][src*="video.html"]',
		'object',
		'embed'
	];

	/**
	 * Do the wrapping.
	 */
	var init = function() {

		$( selectors ).wrap( '<div class="iframe-wrapper"></div>' );

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
