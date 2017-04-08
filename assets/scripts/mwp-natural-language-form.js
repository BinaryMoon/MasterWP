/**
 * [MWP_NaturalLanguageForm description]
 * @type {[type]}
 */

/* global $, MWP_NaturalLanguageForm */

/**
 *
 */
var MWP_NaturalLanguageForm = (function() {

	"use strict";


	var convertSelectBoxes = function() {

		// Loop through all select boxes with the nl-select class.
		$( 'select.nl-select' ).each( function() {

			// Get the curreent form element object.
			var $this = $( this );

			// Wrap the form element in a div.
			$this.wrap( '<div class="nl-inline"></div>' );

			// Create a button with the currently selected item.
			var $selected = $( '<span class="nl-selected">' + $this.find(':selected').text() + '</span>' );
			$this.after( $selected );

			// Create a list of possible options for a user to select.
			var options = '<ul>';

			// Loop through options and generate a list of choices.
			$this.find( 'option' ).each( function() {
				var $option = $( this );
				options = options + '<li><a href="#" data-value="' + $option.val() + '">' + $option.text() + '</a></li>';
			});

			options = options + '</ul>';

			// Generate a jQuery object from the html.
			var $options = $( options );

			// Add the options selector after the select box.
			$this.after( $options );

			// Hide the select box.
			$this.hide();

			// When the selected item is clicked display the options.
			$selected.on(
				'click',
				function( e ) {

					e.preventDefault();

					// Hide all menus.
					hideOptionBoxes();

					// Show the menu for the current option.
					$( this ).parent().find( 'ul' ).addClass( 'nl-display' );

				}

			)

			// When an option is selected update the displayed text.
			$options.find( 'a' ).on(
				'click',
				function( e ) {

					e.preventDefault();

					var $this = $( this );
					var $parent = $this.closest( '.nl-inline' );

					var itemText = $this.text();
					var itemValue = $this.data( 'value' );

					// Hide the options.
					hideOptionBoxes();

					// Set select box selected property so that we can access the property through code.
					$parent.find( 'option[value=' + itemValue + ']' ).prop( 'selected', true );

					// Change the visible values.
					$parent.find( '.nl-selected' )
						.text( itemText )
						.data( 'value', itemValue );

					// Trigger a property change.
					// We hook into this in the MWP_FilterThemes class.
					$( 'body' ).trigger( 'nl:change' );

				}
			)
		});

	}


	/**
	 * Hide the option boxes.
	 */
	var hideOptionBoxes = function() {

		$( '.nl-inline ul' ).removeClass( 'nl-display' );

	}

	/**
	 * Initialize everything.
	 */
	var init = function() {

		convertSelectBoxes();

	}


	/**
	 * Return public methods.
	 */
	return {
		init: init
	};

}());
