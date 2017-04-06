/**
 * main.js v1
 */

;( function( window, document, $ ) {

    'use strict';

    /**
     * Smooth scroll to # anchor
     *
     * @param  object e Element.
     * @return false
     */
    var scroll_to_hash = function( e ) {

        var $target = $( e.hash );

        if ( $target.length ) {
            var targetOffset = $target.offset().top - parseInt( $( 'html' ).css( 'margin-top' ) );
            $( 'html,body' ).animate( { scrollTop: targetOffset }, 750 );
            focus_element( e.hash );
        }

        return false;

    };


    /**
     * Do all the stuffs.
     */
    $( document ).ready( function() {

        // smooth scroll to element

        $( '.scroll-to' ).click( function() {

            return scroll_to_hash( this );

        } );

    } );

} )( window, document, jQuery );
