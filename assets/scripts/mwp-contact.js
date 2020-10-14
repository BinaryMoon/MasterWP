/**
 *
 */
var MWP_Contact = ( function() {

	var init = function() {

		addEmails();
		addSubject();

	};


	/**
	 *
	 */
	var addEmails = function() {

		$( 'form.formspree' ).each(
			function() {

				var $this = $( this );
				$this.attr( 'action', 'https://formspree.io/f/xrgobddn' );

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

}() );
