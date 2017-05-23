;( function( window, document, $ ) {

	var App = {

		selectEmail: ko.observable( 'cold-email' ),
		from: ko.observable( 'ben' ),
		articleAuthor: ko.observable( 'Bob' ),
		articleName: ko.observable( 'Article Name' ),
		articleSubject: ko.observable( 'WordPress' ),

	};

	App.fromLongName = ko.pureComputed(
		function() {
			return formatName( this.from() );
		},
		App
	);

	App.fromShortName = ko.pureComputed(
		function() {
			var name = formatName( this.from() );
			var name_parts = name.split( ' ' );
			return name_parts[0];
		},
		App
	);

	App.partnerLongName = ko.pureComputed(
		function() {
			var name = '';
			switch( this.from() ) {

				case 'ben-gillbanks':
					name = 'Alex Denning';
					break;

				case 'alex-denning':
					name = 'Ben Gillbanks';
					break;
			}
			return name;
		},
		App
	);




	/**
	 * Do all the stuffs.
	 */
	$( document ).ready( function() {

		ko.applyBindings( App );

	} );

	function toTitleCase( str ) {

		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

	}

	function formatName( name ) {

		name = name.replace( '-', ' ' )
		name = toTitleCase( name );

		return name;

	}

} )( window, document, jQuery );
