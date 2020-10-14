/**
 * Countdown to a set date.
 */
var MWP_Countdown = ( function() {

	var $clock = null;

	var endtime = null;

	var timeinterval = null;


	/**
	 *
	 */
	var init = function( id ) {

		var endtime = NextDeadline();

		if ( !endtime ) {
			$( '.next-issue' ).hide();
			return;
		}

		$clock = $( id ).find( '.countdown-time' );

		updateClock();

		timeinterval = setInterval(
			updateClock,
			1000
		);

	};


	/**
	 * Update the clock element.
	 */
	var updateClock = function() {

		var t = getTimeRemaining( endtime );
		var timeString = '';

		// Days.
		if ( t.days >= 1 ) {
			timeString += t.days;

			if ( 1 == t.days ) {
				timeString += ' day';
			} else {
				timeString += ' days';
			}
		}

		// Leftpad numbers with 0's.
		var minutes = ( '0' + t.minutes ).slice( -2 )
		var seconds = ( '0' + t.seconds ).slice( -2 )

		// Hours:Minutes:Seconds.
		timeString += ' ' + t.hours + ':' + minutes + ':' + seconds;

		// Update the contents of the span inside the element.
		$clock.html( timeString );

		// Countdown reached so stop counting.
		if ( t.total <= 0 ) {
			clearInterval( timeinterval );
			$clock.html( 'Sending!' );
		}

	};



	/**
	 * Calculate the date and time of the next weeks newsletter.
	 *
	 * @return {string}
	 */
	var NextDeadline = function() {

		if ( 'undefined' !== typeof next_issue ) {
			return next_issue.timestamp * 1000;
		}

		return false;

	};


	/**
	 * Get the time remaining.
	 *
	 * @param  {Date} endtime The date and time for the countdown to end.
	 * @return {object}         An object containing the time broken down into parts for easy display.
	 */
	getTimeRemaining = function( endtime ) {

		// Calculate duration remaining.
		var t = endtime - Date.parse( new Date() );
		var seconds = Math.floor( ( t / 1000 ) % 60 );
		var minutes = Math.floor( ( t / 1000 / 60 ) % 60 );
		var hours = Math.floor( ( t / ( 1000 * 60 * 60 ) ) % 24 );
		var days = Math.floor( t / ( 1000 * 60 * 60 * 24 ) );

		// Return time remaining in parts for easy display.
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};

	};


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}() );
