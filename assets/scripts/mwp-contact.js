/**
 *
 */
var MWP_Contact = (function() {

	var init = function() {

		addEmails();
		addSubject();

	};


	/**
	 *
	 */
	var addEmails = function() {

		console.log( 'add emails' );

		$( 'form.formspree' ).each(
			function() {

				var $this = $( this );
				var email = $this.data( 'email' );

				// If there is a custom email address use that. Else use support at ptd.
				if ( email ) {

					// Do some replacements for basic obfuscation.
					email = email.replace( '-at-', '@' );
					email = email.replace( '-dot-', '.' );

				} else {

					email = 'hello' + '@' + 'masterwp' + '.' + 'co';

				}

				$this.attr( 'action', '//formspree.io/' + email );

			}
		);

	};


	/**
	 * Add a subject to the email.
	 *
	 * This is dynamic so that the emails do not all stack up in gmail.
	 */
	var addSubject = function() {

		$( 'form.formspree' ).each(
			function() {

				var $this = $( this );
				var today = new Date();

				var dd = today.getDate();
				var mm = today.getMonth() + 1; //January is 0!
				var yyyy = today.getFullYear();

				var $subject = $this.find( '#_subject' );
				var title = $subject.val() + ' - ' + dd + '/' + mm + '/' + yyyy;

				$subject.val( title );

			}
		);

	};

	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
